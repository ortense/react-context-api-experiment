import React from 'react'
import { AppShell } from '../components/AppShell'
import Counter from '../components/Counter'

export const CounterPage = () =>
  <AppShell>
    <h1>Counter</h1>
    <Counter />
    <Counter />
    <Counter />
  </AppShell>
