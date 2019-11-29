import { reducer as reducerTodos } from './reducer'
import { combineReducers } from 'redux'


const reducerRoot = combineReducers({
  todos: reducerTodos
})

export {
  reducerRoot
}
