import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render, fireEvent } from '@testing-library/react'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { App } from '../app'
import { reducerRoot } from '../reducer-root'



describe('[Navigator and Routes]', () => {
  describe('Navigating to page A and reset jsDOM', () => {
    it('Router can navigate to page A', async () => {
      const history = createMemoryHistory()
      const store = createStore(reducerRoot, applyMiddleware(thunk))

      const {
        getByText,
        findByText
      } = renderWithStoreAndRouter(history, store)(<App />)

      const link = getByText('Link to: /page a')
      fireEvent.click(link)
      await findByText('Page content a')
    })

    it('Make sure jsDom is clear from state from previous state', () => {
      const history = createMemoryHistory()
      const store = createStore(reducerRoot, applyMiddleware(thunk))

      const {
        queryByText,
      } = renderWithStoreAndRouter(history, store)(<App />)

      const pageContentA = queryByText('Page content a')
      expect(pageContentA).toBeNull()
    })
  })



  it('Navigate to page todo', async () => {
    const history = createMemoryHistory()
    const store = createStore(reducerRoot, applyMiddleware(thunk))

    const {
      getByText,
      findByText
    } = renderWithStoreAndRouter(history, store)(<App />)

    const link = getByText('Link to: /page-todo')
    fireEvent.click(link)
    await findByText(/Enter\stodo\shere/i)
  })


  it('Navigate to page subreddit', async () => {
    const history = createMemoryHistory()
    const store = createStore(reducerRoot, applyMiddleware(thunk))

    const {
      getByText,
      findByText
    } = renderWithStoreAndRouter(history, store)(<App />)

    const link = getByText('Link to: /page-subreddit')
    fireEvent.click(link)

    await findByText(/fetching\slist\sof\sposts\sfrom\shttps:\/\/www.reddit/i)
  })


  it('router can handle no match', async () => {
    const history = createMemoryHistory()
    const store = createStore(reducerRoot, applyMiddleware(thunk))

    const {
      findByText
    } = renderWithStoreAndRouter(history, store)(<App />)

    history.push('/does-not-exit')

    await findByText('Page no match')
  })
})




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
