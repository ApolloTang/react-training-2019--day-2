import React from 'react'
import {render} from '@testing-library/react'


const CancelButton = () => (
  <button>CANCEL</button>
)

test('cancel button exist', ()=>{
  const {getByText} = render(<CancelButton/>)
  getByText(/cancel/i)
  //        ^^^^^^^^^
  // alway try to use case insensitive regex to query you things
  // in dom
})








