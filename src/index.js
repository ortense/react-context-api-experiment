import React from 'react'
import ReactDOM from 'react-dom'
import Store from './store'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Store>
    <App />
  </Store>, document.getElementById('root'))

registerServiceWorker()
