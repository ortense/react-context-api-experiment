import React from 'react'

export const Wrapper = ({ name, children }) =>
  <section style={{ paddingTop: '10px' }}>
    <h1>{name}</h1>
    {children}
  </section>

export default Wrapper
