import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.calculatorButton
  },
  inner: {
    padding: 0,
    backgroundColor: Colors.bloodOrange,
    flex: 1
  },
  innerText: {
    ...ApplicationStyles.calculatorButtonText,
    color: Colors.silver
  }
})
