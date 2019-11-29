import React from 'react'
import { connect } from 'react-redux'

import {
  mapAppStateToProps,
  mapDispatchToProps
} from './selector'



// =====
//  App
// =====
const App = ({
    dispatch_increase,
    dispatch_decrease,
    count
}) => {
  const handle_increase = () => {
    dispatch_increase()
  }

  const handle_decrease = () => {
    dispatch_decrease()
  }
  return (
    <>
      <h1>Page A</h1>
      <div>
        <button onClick={handle_increase}>+</button>
        <button onClick={handle_decrease}>-</button>
        <div data-testid='count-value'>count: {count}</div>
      </div>
    </>
  )
}



const ConnectedApp = connect(
  mapAppStateToProps,    // <----- let you read store staste
  mapDispatchToProps  // <----- let you update store state
)(App)

export { ConnectedApp }
