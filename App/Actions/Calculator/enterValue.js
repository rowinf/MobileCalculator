import Types from '../Types';

const enterValue = (parameter) => ({
  type: Types.CALCULATOR_ENTER_VALUE,
  parameter
})

export default enterValue
