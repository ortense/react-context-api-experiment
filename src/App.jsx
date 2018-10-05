import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as pages from './pages'
import './App.css'

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={pages.Home} />
      <Route exact path="/hello" component={pages.Hello} />
      <Route exact path="/counter" component={pages.Counter} />
    </Switch>
  </Router>

export default App
