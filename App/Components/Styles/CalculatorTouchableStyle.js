import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.calculatorButton
  },
  inner: {
    ...ApplicationStyles.calculatorButtonInner,
    backgroundColor: Colors.silver
  },
  innerText: {
    ...ApplicationStyles.calculatorButtonText
  },
  grow: {
    flex: 1
  }
})
