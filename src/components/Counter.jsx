import React from 'react'
import { Wrapper } from './Wrapper'
import Store from '../store'

export const Counter = ({ state, dispatch }) =>
  <Wrapper name='components/Counter.jsx'>
    <button onClick={() => dispatch({ type: 'decrementCounter' })}> - </button>
    <span> {state.counter} </span>
    <button onClick={() => dispatch({ type: 'incrementCounter' })}> + </button>
  </Wrapper>

export default Store.connect(Counter)
