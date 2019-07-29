import {hot} from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './components/Icon'
import Form from './components/Form/form'

function App() {
  return (
    <div>
      <Icon/>
      <p>^^^^^^ Proof images load correctly work</p>
      <h1>Hello World!</h1>
      <p>It works!!!!!!!!!!!!!</p>
      <Form/>
    </div>
  )
}

let A = hot(App)
ReactDOM.render(<A/>, document.getElementById('app'))