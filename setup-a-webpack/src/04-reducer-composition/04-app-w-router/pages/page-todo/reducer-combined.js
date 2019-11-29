import { reducer as reducerTodos } from './reducer-todos'
import { combineReducers } from 'redux'


const combineReducers_todo = combineReducers({
  todos: reducerTodos
})

export {
  combineReducers_todo
}
