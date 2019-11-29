import React from 'react'

const Form_subscription= ({api}) => {
  const [name, updateName] = React.useState('')
  const [email, updateEmail] = React.useState('')

  const [isPosting, updateIsPosting] = React.useState(false)
  const [message, updateMessage] = React.useState(undefined)

  const handle_onChange_input = ({target}) => {
    const id = target.id
    const value = target.value

    switch(id) {
      case 'name':
        updateName(value)
        break
      case 'email':
        updateEmail(value)
        break
      default:
    }
  }

  const handle_onSubmit = async (e) => {
    e.preventDefault()
    const formElements = e.target.elements
    const data = {}

    for ( const item of formElements) {
      item.id === 'name' && (data[item.id] = item.value)
      item.id === 'email' && (data[item.id] = item.value)
    }

    updateIsPosting(true)
    const response = await api.subscription(data)
    updateIsPosting(false)
    updateMessage(response)
  }

  return (
    <form
      data-testid="subscription-form"
      onSubmit={handle_onSubmit}
    >
      <label htmlFor="name">Name: </label>
      <input type="text" id="name"  disabled={isPosting} onChange={handle_onChange_input} value={name} required />

      <label htmlFor="email">Email: </label>
      <input type="email" id="email"  disabled={isPosting} onChange={handle_onChange_input} value={email} required />

      <button disabled={isPosting}>subscribe</button>
      {isPosting ? <div data-testid="is-posting">...subscribing</div>: null}
      {(!isPosting && message) ? <div data-testid="message">{message}</div>: null}
    </form>
  )
}

export {Form_subscription}
