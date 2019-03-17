export const incrementCounter = state => ({ ...state, counter: state.counter + 1 })

export const decrementCounter = state => ({ ...state, counter: state.counter - 1 })

export const updateMessage = (state, payload) => ({ ...state, message: payload.message })

