
export default class CalcUtils {
  static AC = 'AC'
  static MINUS = '-'
  static EQUALS = '='
  static DECIMAL = '.'
  static PLUS = '+'
  static TIMES =  '*'
  static DIVIDED_BY = '/'
  static PLUS_MINUS = '±'
  static PERCENT = '%'

  static isOperator (character) {
    return [this.MINUS, this.PLUS, this.TIMES, this.DIVIDED_BY].includes(character)
  }

  static numberMatches (str) {
    const numerics = new RegExp(/-?[\d]+\.?\d*/g)
    const matches = str.match(numerics) || ['0']
    return matches
  }

  static onlyLastNumber (value) {
    const matches = this.numberMatches(String(value))
    return matches[matches.length - 1]
  }
}
