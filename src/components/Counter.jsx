import React from 'react'
import { Wrapper } from './Wrapper'
import Store from '../store'

export const Counter = ({ counter, incrementCounter, decrementCounter }) =>
  <Wrapper name='components/Counter.jsx'>
    <button onClick={decrementCounter}> - </button>
    <span> {counter} </span>
    <button onClick={incrementCounter}> + </button>
  </Wrapper>

export default Store.connect(Counter)
