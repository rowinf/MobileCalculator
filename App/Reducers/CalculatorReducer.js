import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

import math from 'mathjs'

import CalcUtils from '../Lib/CalcUtils'

export const INITIAL_STATE = Immutable({
  expression: ''
})

export const buildExpression = (expression, key) => {
  if (key == CalcUtils.EQUALS) {
    return math.eval(expression)
  }
  else if (key == CalcUtils.AC) {
    return ''
  }
  return '' + expression + key
}

const keyPress = (state, action) => {
  const expression = buildExpression(state.expression, action.payload)

  return state.merge({
    expression
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.KEY_PRESS]: keyPress
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
