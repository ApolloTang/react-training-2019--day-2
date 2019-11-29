import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'



// ************************************************
//
// use user-event help for user event:
// https://github.com/testing-library/user-event
//
// ************************************************



const MyForm = () => {
  const handle_onChange_name = ({target}) => { // eslint-disable-line
    // console.log(target.value)  // <------- uncomment this to see typing in action
  }
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input onChange={handle_onChange_name}type="text" id="name"/>
    </form>
  )
}


test('event can type into form', ()=>{ // eslint-disable-line
  const {
    getByLabelText,
  } = render(<MyForm/>)
  const input_name = getByLabelText(/name/i)

  userEvent.type(input_name, 'apollo tang')
})


