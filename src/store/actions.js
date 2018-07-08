
export const incrementCounter = Store => () =>
    Store.setState(state => ({ counter: state.counter + 1 }))

export const decrementCounter = Store => () =>
    Store.setState(state => ({ counter: state.counter - 1 }))

export const updateMessage = Store => (message) =>
    Store.setState(state => ({ message }))
