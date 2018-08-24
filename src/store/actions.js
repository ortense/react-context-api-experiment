
export const incrementCounter = store => () =>
    store.setState(state => ({ counter: state.counter + 1 }))

export const decrementCounter = store => () =>
    store.setState(state => ({ counter: state.counter - 1 }))

export const updateMessage = store => message =>
    store.setState(state => ({ message }))
