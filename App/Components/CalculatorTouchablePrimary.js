import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './Styles/CalculatorTouchablePrimaryStyle'

export default class CalculatorTouchablePrimary extends React.Component {

  constructor (props) {
    super(props)
    this.whenPressed = this.whenPressed.bind(this)
  }

  // // Prop type warnings
  static propTypes = {
    onPress: React.PropTypes.func.isRequired
  }
  //
  // // Defaults for props
  static defaultProps = {
  }

  whenPressed () {
    this.props.onPress(this.props.value)
  }

  render () {
    const {children, onPress, value} = this.props

    return (
      <TouchableHighlight style={[
        styles.container
      ]} onPress={this.whenPressed}>
        <View style={[styles.inner]}>
          <Text style={styles.innerText}>{value}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
