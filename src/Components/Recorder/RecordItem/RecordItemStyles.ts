import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  con: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    borderRadius: 8,
  },
  buttons: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    height: '50%',
  },
  bar: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 4,
    width: screenWidth * 0.6,
  },
  barContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    justifyContent: 'space-evenly',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
