import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { PageTodo } from '../'
import { reducerRoot } from '../../../reducer-root'


function renderWithStoreAndRouter(_history, _store){
  return function(ui) {
    return render(
      <Provider store={_store}>
        <Router history={_history}>
          {ui}
        </Router>
      </Provider>
    )
  }
}

test('Can update todos and do filter operation', () =>{

  const history = createMemoryHistory()
  const store = createStore(reducerRoot, applyMiddleware(thunk))
  const {
    getByLabelText,
    getByText,
    getByTestId,
    getAllByTestId,
    queryByText
  } = renderWithStoreAndRouter(history, store)(<PageTodo />)

  const todoTexts = [
    'learn react', 'learn redux', 'learn typescript'
  ]

  const newTodoInput = getByLabelText(/enter\stodo/i)
  const newTodoForm = getByTestId('new-todo-form')

  const activeButton = getByTestId('ctrl-active')
  const completedButton = getByTestId('ctrl-completed')
  const allButton = getByTestId('ctrl-all')

  // create todo items
  todoTexts.forEach(todoText=>{
    userEvent.type(newTodoInput, todoText)
    fireEvent.submit(newTodoForm)
  })

  // todoItems has been created
  expect(getAllByTestId('todo-item')).toHaveLength(3)

  // 'learn redux' item has been completed
  const todoItemToClick = getByText('learn redux')
  fireEvent.click(todoItemToClick)

  // filter by completed
  fireEvent.click(completedButton)
  expect(getAllByTestId('todo-item')).toHaveLength(1)
  expect(queryByText('learn react')).toBeNull()
  expect(queryByText('learn typescript')).toBeNull()
  getByText('learn redux')

  // filter by all
  fireEvent.click(allButton)
  expect(getAllByTestId('todo-item')).toHaveLength(3)
  getByText('learn redux')
  getByText('learn react')
  getByText('learn typescript')

  // filter by active item
  fireEvent.click(activeButton)
  expect(getAllByTestId('todo-item')).toHaveLength(2)
  expect(queryByText('learn redux')).toBeNull()
  getByText('learn react')
  getByText('learn typescript')
})



