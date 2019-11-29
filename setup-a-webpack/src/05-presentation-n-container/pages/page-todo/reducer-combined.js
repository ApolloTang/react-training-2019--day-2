import { reducer as reducerTodos } from './containers/todo-list/reducer'
import { combineReducers } from 'redux'


const combineReducers_todo = combineReducers({
  todos: reducerTodos
})

export {
  combineReducers_todo
}
