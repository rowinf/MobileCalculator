
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import math from 'mathjs'

import Types from '../Actions/Types'
import CalcUtils from '../Lib/CalcUtils'

export const INITIAL_STATE = Immutable({
  expression: '0',
  resetOnNextKeyPress: false
})

export const negateNumber = (expression) => {
  if (expression.indexOf('-') === -1 && expression != '0') {
    return `-${expression}`
  } else if (expression.indexOf('-') === 0 && expression.length > 1) {
    return expression.slice(1)
  } else {
    return expression
  }
}

export const appendNumber = (expression, num) => {
  if(expression.indexOf('0') === 0) {
    return '' + num
  }
  return expression += num
}

export const appendDecimal = (expression) => {
  let lastNum = CalcUtils.onlyLastNumber(expression)
  if (lastNum.indexOf(CalcUtils.DECIMAL) === -1) {
    return expression + CalcUtils.DECIMAL
  }
  return expression
}

export const appendOperator = (expression, operator) => {
  let endChar = expression.slice(-1)
  let expr = expression.slice(0, -1)
  if (Number.isInteger(Number(endChar))) {
    return expression + operator
  } else if (CalcUtils.isOperator(endChar)) {
    return `${expr}${operator}`
  } else {
    return expression
  }
}

export const buildInput = ({lastKeyPressed, expression}, action) => {
  let input = lastKeyPressed === CalcUtils.EQUALS
    ? '0'
    : expression
  if (Number.isInteger(action.payload)) {
    return appendNumber(input, action.payload)
  }
  switch (action.payload) {
    case CalcUtils.PLUS_MINUS:
      return negateNumber(expression)
    case CalcUtils.DECIMAL:
      return appendDecimal(expression)
    case CalcUtils.PLUS:
    case CalcUtils.MINUS:
    case CalcUtils.TIMES:
    case CalcUtils.DIVIDED_BY:
      return appendOperator(expression, action.payload)
    default:
      return expression
  }
}

export const buildExpression = (state, action) => {
  switch (action.payload) {
    case CalcUtils.EQUALS:
      try {
        return String(math.eval(state.expression))
      } catch (e) {
        return '0'
      }
    case CalcUtils.AC:
      return '0'
    default:
      return buildInput(state, action)
  }
}

const keyPress = (state, action) => {
  return state.merge({
    expression: buildExpression(state, action),
    lastKeyPressed: action.payload
  })
}

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.KEY_PRESS]: keyPress
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
