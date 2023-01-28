import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,

    borderColor: 'transparent',
    borderWidth: 4,
    borderRadius: 25,
    margin: 10,
  },
  text: { color: 'white', textAlign: 'right' },
  date: {
    position: 'absolute',
    top: 0,
    color: 'white',
    left: 15,
  },
  content: {
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    alignSelf: 'center',
    height: '80%',
    color: 'white',
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
  },
  button: {
    backgroundColor: 'red',
    height: 25,
    width: 25,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  con: { width: '45%' },
});
