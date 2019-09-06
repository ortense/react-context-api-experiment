import React from 'react'
import ReactDOM from 'react-dom'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Store} from './Store'

// this is necessary because create-react-app doesn't allow jest setup files
configure({ adapter: new Adapter() })

describe('Store', () => {
  const FakeApp = () => <h1>Fake</h1>

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Store><FakeApp/></Store>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  describe('dispatch', () => {
    const fakeReducers = { test: jest.fn() }
    const initialState = {}
    const fakeAction = { type: 'test', payload: { test: true } }
    const wrapper = shallow(
      <Store reducers={fakeReducers} initialState={initialState}>
        <FakeApp/>
      </Store>
    )
    const store = wrapper.instance()

    afterEach(() => {
      fakeReducers.test.mockClear()
      wrapper.setState(initialState)
    })

    it('should be a function', () => {
      expect(typeof store.dispatch).toBe('function')
    })

    it('should call reducers by action type', () => {
      store.dispatch(fakeAction)
      expect(fakeReducers.test).toHaveBeenCalledTimes(1)
      expect(fakeReducers.test).toHaveBeenCalledWith(initialState, fakeAction.payload)
    })
  })

  describe('connect', () => {
    it('should be a static method', () => {
      expect(typeof Store.connect).toBe('function')
    })

    it('should return a valid component', () => {
      const ConectedComponent = Store.connect(FakeApp)
      const div = document.createElement('div')
      ReactDOM.render(<ConectedComponent/>, div)
      ReactDOM.unmountComponentAtNode(div)
    })
  })
})
