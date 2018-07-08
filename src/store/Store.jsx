import React from 'react'
import * as actions from './actions.js'
import initialState from './state'

const Context = React.createContext()

export class Store extends React.Component {
  static Consumer = Context.Consumer

  constructor(...args) {
    super(...args)

    this.state = Object
      .keys(actions)
      .reduce((state, key) => ({
        ...state,
        [key]: actions[key](this)
      }), initialState)
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const connect = component => () =>
  <Store.Consumer>{component}</Store.Consumer>
