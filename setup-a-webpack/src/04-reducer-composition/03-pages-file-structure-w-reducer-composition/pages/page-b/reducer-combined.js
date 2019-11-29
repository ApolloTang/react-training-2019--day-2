import { reducer as reducerCounter } from './reducer-counter'
import { combineReducers } from 'redux'


const combineReducers_pageB = combineReducers({
  counter: reducerCounter
})

export {
  combineReducers_pageB
}
