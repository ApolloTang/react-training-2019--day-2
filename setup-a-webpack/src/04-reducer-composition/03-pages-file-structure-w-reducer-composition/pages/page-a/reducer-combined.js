import { reducer as reducerCounter } from './reducer-counter'
import { combineReducers } from 'redux'


const combineReducers_pageA = combineReducers({
  counter: reducerCounter
})

export {
  combineReducers_pageA
}
