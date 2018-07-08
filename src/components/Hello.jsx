import React from 'react'
import Wrapper from './Wrapper'
import { connect } from '../store'

export const Hello = ({ message, updateMessage }) =>
  <Wrapper name='components/Hello.jsx'>
    <input
      onChange={event => updateMessage(event.target.value)}
      type='text' />
    <p>Hello {message}</p>
  </Wrapper>

export default connect(Hello)
