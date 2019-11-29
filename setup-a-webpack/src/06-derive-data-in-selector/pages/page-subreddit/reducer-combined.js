import { reducer as reducerSubreddit } from './reducer-subreddit'
import { combineReducers } from 'redux'


const combineReducers_subreddit = combineReducers({
  subreddit: reducerSubreddit
})

export {
  combineReducers_subreddit
}
