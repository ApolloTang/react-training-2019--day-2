import {
  createStore,
  applyMiddleware, compose
} from 'redux'
import thunk from 'redux-thunk'
import {reducerRoot} from './reducer-root'


// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducerRoot,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)


export {
  store
}
