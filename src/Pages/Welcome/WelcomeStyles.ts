import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    borderBottomLeftRadius: 50,
    border: -50,
    width: '100%',
    height: 300,
  },
  tip: {
    position: 'absolute',
    bottom: -25,
    right: 0,
    borderBottomLeftRadius: 25,
    width: 25,
    height: 25,
  },
  categoryList: {},
  recordList: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width: 60, height: 60 },
  lottie: { width: 100, height: 80 },
  iconContainer: { height: '20%', width: '100%' },
  headline: {
    alignItems: 'flex-start',
    height: '100%',
    width: '90%',

    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  text: {
    paddingTop: 25,
    color: 'white',
  },
  Info: {},
});
