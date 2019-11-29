import React from 'react'
import ReactDOM from 'react-dom'


const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

// ===================================================


import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './app'


// ===================================================
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
