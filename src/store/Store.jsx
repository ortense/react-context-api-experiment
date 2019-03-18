import React from 'react'
import * as reducers from './reducers'
import initialState from './state'

const Context = React.createContext()

export class Store extends React.Component {
  static Consumer = Context.Consumer

  constructor(props) {
    super(props)
    this.state = initialState
  }

  static connect(component) {
    const WithStore = () =>
      <Store.Consumer>{component}</Store.Consumer>
    
      return WithStore
  }

  dispatch = action => 
    reducers[action.type] && this.setState(state =>
      reducers[action.type](state, action.payload))

  render() {
    return (
      <Context.Provider value={{ state: this.state, dispatch: this.dispatch }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
