import React from 'react'
import { useState } from 'react'
import './form.css'

function Form(props) {
  let [value, setValue] = useState('')
  let [serverValue, setServerValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    let data = { value }
    console.log(data)
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(r => r.text())
      .then(r => setServerValue(r))
  }

  function onChange(e) {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Your input: {value}</p>
      <p>Response From Server: {serverValue}</p>
      <input type="text" onChange={onChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}
export default Form