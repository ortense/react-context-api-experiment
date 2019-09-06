import {incrementCounter, decrementCounter, updateMessage} from './reducers'

describe('Reducers', () => {
  describe('incrementCounter', () => {
    it('should be a function', () => {
      expect(typeof incrementCounter).toBe('function')
    })

    it('should increment sum one to state.counter', () => {
      const counter = Math.floor(Math.random() * 10)
      const state = { counter, other: 'value' }
      expect(incrementCounter(state)).toEqual({
        other: 'value',
        counter: counter + 1
      })
    })
  })

  describe('decrementCounter', () => {
    it('should be a function', () => {
      expect(typeof decrementCounter).toBe('function')
    })
    
    it('should subtract one to state.counter', () => {
      const counter = Math.floor(Math.random() * 10)
      const state = { counter, other: 'value' }
      expect(decrementCounter(state)).toEqual({
        other: 'value',
        counter: counter - 1
      })
    })
  })

  describe('updateMessage', () => {
    it('should be a function', () => {
      expect(typeof updateMessage).toBe('function')
    })
    
    it('should set payload.message to state.message', () => {
      const state = { message: 'initial message', other: 'value' }
      const payload = { message: 'new pessage' }
      expect(updateMessage(state, payload)).toEqual({
        other: 'value',
        message: payload.message
      })
    })
  })
})