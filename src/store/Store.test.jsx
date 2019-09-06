import React from 'react'
import ReactDOM from 'react-dom'
import {Store} from './Store'

describe('Store', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const Fake = () => <h1>Fake</h1>
    ReactDOM.render(<Store><Fake/></Store>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})


