
import React, {PropTypes} from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { Metrics, Images } from '../Themes'
import Calculator from '../Components/Calculator'

import styles from './Styles/CalculatorScreenStyle'

export default class CalculatorScreen extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <Calculator />
      </View>
    )
  }
}
