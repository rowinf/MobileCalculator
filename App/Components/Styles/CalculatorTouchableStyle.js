import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.calculatorButton
  },
  inner: {
    padding: 0,
    backgroundColor: Colors.silver,
    flex: 1,
    marginRight: 2
  },
  innerText: {
    ...ApplicationStyles.calculatorButtonText
  },
  grow: {
    flex: 1
  }
})
