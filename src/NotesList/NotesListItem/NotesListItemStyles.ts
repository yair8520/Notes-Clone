import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,

    borderColor: 'transparent',
    borderWidth: 4,
    borderRadius: 25,
    margin: 10,
  },
  linearGradient: {
    flex: 1,
    height: 100,
  },
  body: {
    fontSize: 15,
    color: 'white',
  },
  text: { color: 'white', textAlign: 'right' },
  date: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
  },
  content: {
    flex: 4,
    width: '80%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
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
