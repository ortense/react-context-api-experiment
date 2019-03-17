import React from 'react'
import Wrapper from './Wrapper'
import Store from '../store'

export const Hello = ({ state, dispatch }) =>
  <Wrapper name='components/Hello.jsx'>
    <input
      type='text'
      onChange={event => dispatch({
        type: 'updateMessage',
        payload: { message: event.target.value }
      })} />
    <p>Hello {state.message}</p>
  </Wrapper>

export default Store.connect(Hello)
