
export const createActions = store => ({
  incrementCounter: () =>
    store.setState(state => ({ counter: state.counter + 1 })),

  decrementCounter: () =>
    store.setState(state => ({ counter: state.counter - 1 })),

  updateMessage: message =>
    store.setState({ message })
})
