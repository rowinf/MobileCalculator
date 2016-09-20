import React from 'react'
import { View, Text, Animated } from 'react-native'
import styles from './Styles/CalculatorInputWindowStyle'
import CalcUtils from '../Lib/CalcUtils'

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

  componentWillReceiveProps (nextProps) {
    if (nextProps.value != this.props.value) {
      Animated.timing(this.state.opaque, {
        toValue: 0,
        duration: 100
      }).start(()=> {
        this.state.opaque.setValue(1)
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.inputText, {opacity: this.state.opaque}]}>
          {CalcUtils.onlyLastNumber(this.props.value)}
        </Animated.Text>
      </View>
    )
  }
}
