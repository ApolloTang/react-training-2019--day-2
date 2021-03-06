import React from 'react'
import { connect } from 'react-redux'

import {
  mapAppStateToProps,
  mapDispatchToProps
} from './selector'

import { TodoItem } from '../../presentations/todo-item'
import { NewTodo } from '../../presentations/new-todo'



// =====
//  App
// =====
const App = ({
  dispatch_addTodo,
  dispatch_deleteTodo,
  dispatch_toggleTodo,
  todos
}) => {
  const handle_addTodo = newTodo => {
    dispatch_addTodo(newTodo)
  }

  const handle_delete = id => () => {
    dispatch_deleteTodo(id)
  }

  const handle_toggle = id => () => {
    dispatch_toggleTodo(id)
  }

  return (
    <div>
      <NewTodo newTodoSubmit={handle_addTodo} />
      <div data-testid="todo-list">
        {
          todos.map(
            todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={handle_delete(todo.id)}
                toggleTodo={handle_toggle(todo.id)}
              />
            )
          )
        }
      </div>
    </div>
  )
}



const ConnectedApp = connect(
  mapAppStateToProps,
  mapDispatchToProps
)(App)

export { ConnectedApp }
