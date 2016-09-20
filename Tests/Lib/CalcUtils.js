import test from 'ava'

import CalcUtils from '../../App/Lib/CalcUtils'


test('numberMatches', t => {
  t.deepEqual(CalcUtils.numberMatches('5 - 4'), ['5', '4'])
  t.deepEqual(CalcUtils.numberMatches('5 - -4'), ['5', '-4'])
})

test('onlyLastNumber', t => {
  t.is(CalcUtils.onlyLastNumber('5'), '5')
  t.is(CalcUtils.onlyLastNumber('55.'), '55.')
  t.is(CalcUtils.onlyLastNumber('5 - 4'), '4')
  t.is(CalcUtils.onlyLastNumber('5 - -4'), '-4')
})
