import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  },
  inputRow: {
    justifyContent: 'center'
  },
  buttonGrid: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 1,
    paddingRight: 1
  },
  subduedButton: {
    backgroundColor: Colors.frost
  }
})
