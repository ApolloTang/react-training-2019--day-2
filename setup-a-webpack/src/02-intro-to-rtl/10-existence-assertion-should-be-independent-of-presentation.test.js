import React from 'react'
import {render} from '@testing-library/react'


const CancelButton = () => (
  <button>CANCEL</button>
)

test('cancel button exist', ()=>{
  const {getByText} = render(<CancelButton/>)
  expect(getByText(/cancel/i)).toBeTruthy()
  //               ^^^^^^^^^
  // alway try to use case insensitive regex to query you things
  // in dom
})








