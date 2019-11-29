import React from 'react'
import {render} from '@testing-library/react'

// **************************************************
//
// cannot use getByText because we don't know in
// advance the text will be, so we use test-id
//
// **************************************************

const MyApp = () => {
  const [thumbs, updateThumbs] = React.useState('up')
  const [show, updateShow] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(()=>{ updateShow(true) }, 1000)
  }, [])

  React.useEffect(()=>{
    const evenOdd = Math.floor(Math.random()*10) % 2
    evenOdd ? updateThumbs('up') : updateThumbs('down')
  }, [])

  return(
    <>
      {show ? <div data-testid="thumbs"> { thumbs } </div> : null}
    </>
  )
}


it('[Existence assertion async by test id]', async () => {
  const {
    findByTestId, // <--- note these queries end with TestId
    queryByTestId,
    container, debug
  } = render(<MyApp />)

  expect(queryByTestId(/thumbs/i)).toBeNull()
  debug(container)
  await findByTestId(/thumbs/i)
  debug(container)
})









