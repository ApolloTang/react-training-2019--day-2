import _get from 'lodash/get'
import {
  asyncActions,
} from './action'



const getIsoStringFromDatestamp = receivedAt =>
  (typeof receivedAt === 'number')
    ? (new Date(receivedAt)).toISOString() : undefined



const mapStoreToProps = appState => {
  const entryPoint = 'pageSubreddit'

  const receivedAt = _get(appState, `${entryPoint}.subreddit.receivedAt`, undefined)
  const date = getIsoStringFromDatestamp(receivedAt)

  return {
    date,
    posts     : _get(appState, `${entryPoint}.subreddit.posts`    , []),
    isLoading : _get(appState, `${entryPoint}.subreddit.isLoading`, false),
    errorMsg  : _get(appState, `${entryPoint}.subreddit.errorMsg` , '')
  }
}



const mapDispatchToProps = dispatch => ({
  dispatch_fetchSubredditPosts() { dispatch( asyncActions.thunk_fetchSubreddit() ) }
})



export {
  mapStoreToProps,
  mapDispatchToProps,

  getIsoStringFromDatestamp
}
