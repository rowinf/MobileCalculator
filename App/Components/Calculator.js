import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CalculatorStyle'
import CalculatorInputWindow from './CalculatorInputWindow'
import CalculatorTouchable from './CalculatorTouchable'
import CalculatorTouchablePrimary from './CalculatorTouchablePrimary'
import CalcUtils from '../Lib/CalcUtils'
import Actions from '../Actions/Creators'

export default class Calculator extends React.Component {

  constructor (props) {
    super(props)
    this.numberPressed = this.numberPressed.bind(this)
  }

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

  numberPressed (value) {
    this.props.dispatch(Actions.keyPress(value))
  }

  render () {
    const {expression} = this.props.calculator
    return (
      <View style={styles.container}>
        <View style={styles.inputRow}>
          <CalculatorInputWindow value={expression} />
        </View>
        <View style={styles.buttonGrid}>
          <View style={styles.buttonRow}>
            <CalculatorTouchable onPress={this.numberPressed} value={CalcUtils.AC} touchableStyles={styles.subduedButton} />
            <CalculatorTouchable onPress={this.numberPressed} value={CalcUtils.PLUS_MINUS} touchableStyles={styles.subduedButton} />
            <CalculatorTouchable onPress={this.numberPressed} value={CalcUtils.PERCENT} touchableStyles={styles.subduedButton} />
            <CalculatorTouchablePrimary onPress={this.numberPressed} value={CalcUtils.DIVIDED_BY} />
          </View>
          <View style={styles.buttonRow}>
            <CalculatorTouchable onPress={this.numberPressed} value={7} />
            <CalculatorTouchable onPress={this.numberPressed} value={8} />
            <CalculatorTouchable onPress={this.numberPressed} value={9} />
            <CalculatorTouchablePrimary onPress={this.numberPressed} value={CalcUtils.TIMES} />
          </View>
          <View style={styles.buttonRow}>
            <CalculatorTouchable onPress={this.numberPressed} value={4} />
            <CalculatorTouchable onPress={this.numberPressed} value={5} />
            <CalculatorTouchable onPress={this.numberPressed} value={6} />
            <CalculatorTouchablePrimary onPress={this.numberPressed} value={CalcUtils.MINUS} />
          </View>
          <View style={styles.buttonRow}>
            <CalculatorTouchable onPress={this.numberPressed} value={1} />
            <CalculatorTouchable onPress={this.numberPressed} value={2} />
            <CalculatorTouchable onPress={this.numberPressed} value={3} />
            <CalculatorTouchablePrimary onPress={this.numberPressed} value={CalcUtils.PLUS} />
          </View>
          <View style={styles.buttonRow}>
            <CalculatorTouchable onPress={this.numberPressed} growth="grow" value={0} />
            <CalculatorTouchable onPress={this.numberPressed} growth="shrink" value={CalcUtils.DECIMAL} />
            <CalculatorTouchablePrimary onPress={this.numberPressed} value={CalcUtils.EQUALS} />
          </View>
        </View>
      </View>
    )
  }
}
