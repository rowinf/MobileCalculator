import React from 'react'
import { View, Text, Animated } from 'react-native'
import styles from './Styles/CalculatorInputWindowStyle'

export default class CalculatorInputWindow extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      opaque: new Animated.Value(1)
    }
  }

  static propTypes = {
    value: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    value: '0'
  }

  prettify (value) {
    const nonNumeric = new RegExp(/[^\d\.\s]+/g)
    const str = value.replace(nonNumeric, (match) => ` ${match} `)
    return str
  }

  onlyLastNumber (value) {
    const prettified = this.prettify(value)
    const numerics = new RegExp(/-?[\d.\d]+/g)
    const str = prettified.match(numerics) || ['0']
    return str[str.length - 1]
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value != this.props.value) {
      Animated.timing(
        this.state.opaque,
        {
          toValue: 0,
          duration: 100
        }
      ).start(()=> {
          this.state.opaque.setValue(1)
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.inputText, {opacity: this.state.opaque}]}>
          {this.onlyLastNumber(this.props.value)}
        </Animated.Text>
      </View>
    )
  }
}
