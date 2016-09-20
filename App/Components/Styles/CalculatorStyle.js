import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  inputRow: {
    flex: 0.4
  },
  buttonGrid: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 1,
    paddingRight: 1,
    flex: 1
  },
  subduedButton: {
    backgroundColor: Colors.frost
  }
})
