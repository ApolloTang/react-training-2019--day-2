import React from 'react'
import { render } from '@testing-library/react'

import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { CurrentPath } from './current-path'

describe('[CurrentPath component]', () => {
  it('can show current path', async () => {
    const history = createMemoryHistory()
    const {
      findByText
    } = renderWithStoreAndRouter(history)(<CurrentPath />)

    history.push('/path-to-test')

    await findByText(/path-to-test/i)
  })

})




function renderWithStoreAndRouter(_history){
  return function(ui) {
    return render(
      <Router history={_history}>
        {ui}
      </Router>
    )
  }
}
