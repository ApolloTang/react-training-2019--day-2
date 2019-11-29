import React from 'react'
import ReactDOM from 'react-dom'


const container = document.createElement('div')
container.id = 'app'
document.body.appendChild(container)

// ===================================================


import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './app'


// ===================================================
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
