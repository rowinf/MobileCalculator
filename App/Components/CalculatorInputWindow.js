import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CalculatorInputWindowStyle'

export default class CalculatorInputWindow extends React.Component {

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.inputText}>{this.props.value}</Text>
      </View>
    )
  }
}
