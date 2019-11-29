// RootReducer
import { combineReducers } from 'redux'
import { combineReducers_todo }      from './pages/page-todo/reducer-combined'
import { combineReducers_subreddit } from './pages/page-subreddit/reducer-combined'

const reducerRoot = combineReducers({
  pageTodo     : combineReducers_todo,
  pageSubreddit: combineReducers_subreddit
})


export {reducerRoot}
