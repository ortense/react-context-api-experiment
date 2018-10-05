import React from 'react'
import { createActions } from './actions.js'
import initialState from './state'

const Context = React.createContext()

export class Store extends React.Component {
  static Consumer = Context.Consumer

  constructor(...args) {
    super(...args)

    this.state = {
      ...initialState,
      ...createActions(this),
    }
  }

  static connect(component) {
    const WithStore = () =>
      <Store.Consumer>{component}</Store.Consumer>
    
      return WithStore
  } 

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
