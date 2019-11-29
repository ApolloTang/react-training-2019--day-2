// RootReducer
import { combineReducers } from 'redux'
import { combineReducers_pageA } from './pages/page-a/reducer-combined'
import { combineReducers_pageB } from './pages/page-b/reducer-combined'

const reducerRoot = combineReducers({
  pageA: combineReducers_pageA,
  pageB: combineReducers_pageB
})


export {reducerRoot}
