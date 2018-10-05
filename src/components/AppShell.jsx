import React from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom'

export const AppShell = props => 
  <div className="App">
    <Header />
    <nav style={{ textAlign: 'center', paddingTop: '.5em' }}>
      <Link style={{ padding: '.5em' }} to="/">Home</Link>
      <Link style={{ padding: '.5em' }} to="/counter">Counter</Link>
      <Link style={{ padding: '.5em' }} to="/hello">Hello</Link>
    </nav>
    {props.children}
  </div>