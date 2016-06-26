
import React, {PropTypes} from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { Metrics, Images } from '../Themes'

import styles from './Styles/CalculatorScreenStyle'

export default class CalculatorScreen extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText} >
              This is a calculator
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
