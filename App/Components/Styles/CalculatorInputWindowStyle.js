import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.charcoal,
    margin: 1
  },
  inputText: {
    textAlign: 'right',
    color: Colors.snow,
    ...Fonts.style.h3
  }
})
