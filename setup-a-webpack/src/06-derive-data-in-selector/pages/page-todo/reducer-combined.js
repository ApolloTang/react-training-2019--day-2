// combineReducer for todo pages
import { reducer as reducerTodos } from './containers/todo-list/reducer'
import { reducer as reducerUiControl } from './containers/ui-ctrl/reducer'
import { combineReducers } from 'redux'


const combineReducers_todo = combineReducers({
  todos: reducerTodos,
  uiControl: reducerUiControl
})

export {
  combineReducers_todo,
}
