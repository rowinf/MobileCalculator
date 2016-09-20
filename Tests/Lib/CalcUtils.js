import test from 'ava'

import CalcUtils from '../../App/Lib/CalcUtils'


test('onlyLastNumber', t => {
  t.is(CalcUtils.onlyLastNumber('5'), '5')
  t.is(CalcUtils.onlyLastNumber('55.'), '55.')
})
