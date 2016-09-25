
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import math from 'mathjs'

import Types from '../Actions/Types'
import CalcUtils from '../Lib/CalcUtils'

export const INITIAL_STATE = Immutable({
  expression: '0',
  resetOnNextKeyPress: false
})

export const percentToNumber = (expression) => {
  let tokens = CalcUtils.tokenizeExpression(expression)
  let last = tokens[tokens.length - 1]
  if (last && last != '0') {
    return [...tokens.slice(0, -1), `${last / 100.0}`].join(' ')
  } else {
    return expression
  }
}

export const negateNumber = (expression) => {
  let tokens = CalcUtils.tokenizeExpression(expression)
  let last = tokens[tokens.length - 1]
  if (last && last.indexOf('-') === -1 && last != '0') {
    return [...tokens.slice(0, -1), `-${last}`].join(' ')
  } else if (last && last.indexOf('-') === 0) {
    return [...tokens.slice(0, -1), last.slice(1)].join(' ')
  } else {
    return expression
  }
}

export const appendNumber = (expression, num) => {
  let tokens = CalcUtils.tokenizeExpression(expression)
  let last = tokens[tokens.length - 1]
  if (last.indexOf(CalcUtils.DECIMAL) > -1) {
    return `${expression}${num}`
  } else if (last === '0') {
    return `${num}`
  } else if (Number.isFinite(Number(last))) {
    return `${expression}${num}`
  } else {
    return `${expression} ${num}`
  }
}

export const appendDecimal = (expression) => {
  let tokens = CalcUtils.tokenizeExpression(expression)
  let last = tokens[tokens.length - 1]
  if (CalcUtils.isOperator(last)) {
    return [...tokens, `0${CalcUtils.DECIMAL}`].join(' ')
  } else if (last.indexOf(CalcUtils.DECIMAL) === -1) {
    return [...tokens.slice(0, -1), `${last}${CalcUtils.DECIMAL}`].join(' ')
  }
  return expression
}

export const appendOperator = (expression, operator) => {
  let tokens = CalcUtils.tokenizeExpression(expression)
  let last = tokens[tokens.length - 1]
  if (Number.isFinite(Number(last))) {
    return [...tokens, operator].join(' ')
  } else if (CalcUtils.isOperator(last)) {
    return [...tokens.slice(0, -1), operator].join(' ')
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
    case CalcUtils.PERCENT:
      return percentToNumber(expression)
    default:
      return expression
  }
}

export const buildExpression = (state, action) => {
  switch (action.payload) {
    case CalcUtils.EQUALS:
      try {
        return math.format(math.eval(state.expression), {precision: 14})
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
