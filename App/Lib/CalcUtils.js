
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

  static prettify (value) {
    const nonNumeric = new RegExp(/[^\d\.\s]+/g)
    const str = value.replace(nonNumeric, (match) => ` ${match} `)
    return str
  }

  static onlyLastNumber (value) {
    const prettified = this.prettify(String(value))
    const numerics = new RegExp(/-?[\d]+\.?\d*/g)
    const str = prettified.match(numerics) || ['0']
    return str[str.length - 1]
  }
}
