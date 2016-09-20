import test from 'ava'
import reducer, {
  INITIAL_STATE,
  appendDecimal,
  appendNumber,
  negateNumber,
  appendOperator
} from '../../App/Reducers/CalculatorReducer'

import CalcUtils from '../../App/Lib/CalcUtils'

import Actions from '../../App/Actions/Creators'


test('appendDecimal', t => {
  t.true(appendDecimal('5') === '5.')
  t.true(appendDecimal('5.') === '5.')
  t.true(appendDecimal('5.5') === '5.5')
  t.true(appendDecimal('5.5+6') === '5.5+6.')
})

test('appendNumber', t => {
  t.true(appendNumber('5', 5) === '55')
  t.true(appendNumber('0', 0) === '0')
  t.true(appendNumber('0', 5) === '5')
  t.true(appendNumber('5', 0) === '50')
})

test('negateNumber', t => {
  t.true(negateNumber('5') === '-5')
  t.true(negateNumber('-5') === '5')
  t.true(negateNumber('0') === '0')
})

test('appendOperator', t => {
  t.is(appendOperator('3', '+'), '3+')
  t.is(appendOperator('3+', '+'), '3+')
  t.is(appendOperator('3+4', '+'), '3+4+')
  t.is(appendOperator('3-', '+'), '3+')
})

test('keyPress', t => {
  let state = INITIAL_STATE
  state = reducer(state, Actions.keyPress(3))
  state = reducer(state, Actions.keyPress(4))
  state = reducer(state, Actions.keyPress(CalcUtils.DECIMAL))
  state = reducer(state, Actions.keyPress(7))
  t.is(state.expression, '34.7', 'it appends numbers and decimals')
})

test('keyPress PLUS', t => {
  let state = INITIAL_STATE
  state = reducer(state, Actions.keyPress(3))
  state = reducer(state, Actions.keyPress(CalcUtils.PLUS))
  state = reducer(state, Actions.keyPress(4))
  t.is(state.expression, '3+4', 'it builds an addition expression')
})

test('keyPress MINUS', t => {
  let state = INITIAL_STATE
  state = reducer(state, Actions.keyPress(3))
  state = reducer(state, Actions.keyPress(CalcUtils.MINUS))
  state = reducer(state, Actions.keyPress(4))
  t.is(state.expression, '3-4', 'it builds a subtraction expression')
})

test('keyPress DIVIDED_BY', t => {
  let state = INITIAL_STATE
  state = reducer(state, Actions.keyPress(3))
  state = reducer(state, Actions.keyPress(CalcUtils.DIVIDED_BY))
  state = reducer(state, Actions.keyPress(4))
  t.is(state.expression, '3/4', 'it builds a division expression')
})

test('keyPress TIMES', t => {
  let state = INITIAL_STATE
  state = reducer(state, Actions.keyPress(3))
  state = reducer(state, Actions.keyPress(CalcUtils.TIMES))
  state = reducer(state, Actions.keyPress(4))
  t.is(state.expression, '3*4', 'it builds a multiplication expression')
})

test('keyPress EQUALS', t => {
  let state = INITIAL_STATE
  state = reducer(state, Actions.keyPress(3))
  state = reducer(state, Actions.keyPress(CalcUtils.PLUS))
  state = reducer(state, Actions.keyPress(4))
  state = reducer(state, Actions.keyPress(CalcUtils.EQUALS))
  t.is(state.expression, '7', 'it evaluates an expression')
  state = reducer(state, Actions.keyPress(1))
  t.is(state.expression, '1', 'it resets input on the next keypress')
  state = reducer(state, Actions.keyPress(2))
  t.is(state.expression, '12', 'it allows additional input thereafter')
})
