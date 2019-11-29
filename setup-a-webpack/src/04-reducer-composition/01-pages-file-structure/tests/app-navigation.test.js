import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { render, fireEvent } from '@testing-library/react'

import {App} from '../app'



describe('[Navigator and Routes]', () => {
  describe('Navigating to page A and reset jsDOM', () => {
    it('Router can navigate to page A', async () => {
      const history = createMemoryHistory()

      const {
        getByText,
        findByText
      } = renderWithRouter(history)(<App />)

      const link = getByText('Link to: /page a')
      fireEvent.click(link)
      await findByText('Page content a')
    })

    it('Make sure jsDom is clear from state from previous state', () => {
      const history = createMemoryHistory()

      const {
        queryByText,
      } = renderWithRouter(history)(<App />)

      const pageContentA = queryByText('Page content a')
      expect(pageContentA).toBeNull()
    })
  })


  it('Navigate to page B', async () => {
    const history = createMemoryHistory()

    const {
      getByText,
      findByText
    } = renderWithRouter(history)(<App />)

    const link = getByText('Link to: /page b')
    fireEvent.click(link)
    await findByText('Page content b')
  })


  it('Navigate to home', async () => {
    const history = createMemoryHistory()

    const {
      getByText,
      findByText
    } = renderWithRouter(history)(<App />)

    const link = getByText('Link to: /')
    fireEvent.click(link)

    await findByText(/home/i)
  })


  it('router can handle no match', async () => {
    const history = createMemoryHistory()

    const {
      findByText
    } = renderWithRouter(history)(<App />)

    history.push('/does-not-exit')

    await findByText('Page no match')
  })
})



function renderWithRouter(_history){
  return function(ui) {
    return render(
      <Router history={_history}>
        {ui}
      </Router>
    )
  }
}
