import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  inputValue: '0',
  keyPress: '',
  stack: []
})

const keyPress = (state, action) => {
  return state.merge({
    keyPress: action.payload,
    inputValue: action.payload
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.KEY_PRESS]: keyPress
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
