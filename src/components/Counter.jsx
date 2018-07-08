import React from 'react'
import { Wrapper } from './Wrapper'
import { connect } from '../store'

export const Counter = ({ counter, incrementCounter, decrementCounter }) =>
  <Wrapper name='components/Counter.jsx'>
    <button onClick={incrementCounter}> + </button>
    <span> {counter} </span>
    <button onClick={decrementCounter}> - </button>
  </Wrapper>

export default connect(Counter)
