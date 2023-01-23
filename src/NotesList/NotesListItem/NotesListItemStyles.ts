import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,
    width: '40%',
    borderWidth: 4,
    borderRadius: 25,
    margin: 20,
  },
  date: {
    position: 'absolute',
    top: 0,
    left: 15,
  },
  content: {
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    alignSelf: 'center',
    height: '80%',
  },
});
