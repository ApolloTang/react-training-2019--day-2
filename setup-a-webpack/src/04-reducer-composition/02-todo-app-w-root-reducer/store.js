import { createStore } from 'redux'
import { reducerRoot } from './reducer-root'


const store = createStore(
  reducerRoot,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export {
  store
}
