import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Hello from './components/Hello'
import './App.css'

const App = () =>
  <div className="App">
    <Header />
    <Hello />
    <Counter />
    <Counter />
  </div>

export default App
