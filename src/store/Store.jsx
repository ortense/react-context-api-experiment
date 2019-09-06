import React from 'react'
import PropTypes from 'prop-types'
import * as reducers from './reducers'
import initialState from './state'

const Context = React.createContext()

export class Store extends React.Component {
  static Consumer = Context.Consumer

  constructor(props) {
    super(props)
    this.state = props.initialState
  }

  static connect(component) {
    const WithStore = () =>
      <Store.Consumer>{component}</Store.Consumer>
    
      return WithStore
  }

  dispatch = action => 
    this.props.reducers[action.type] && this.setState(state =>
      this.props.reducers[action.type](state, action.payload))

  render() {
    return (
      <Context.Provider value={{ state: this.state, dispatch: this.dispatch }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

Store.propTypes = {
  initialState: PropTypes.object,
  reducers: PropTypes.objectOf(PropTypes.func)
}

Store.defaultProps = { initialState, reducers }
