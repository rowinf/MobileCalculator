import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.calculatorButton
  },
  inner: {
    ...ApplicationStyles.calculatorButtonInner,
    marginRight: 0,
    backgroundColor: Colors.bloodOrange
  },
  innerText: {
    ...ApplicationStyles.calculatorButtonText,
    color: Colors.silver
  }
})
