import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    width: '90%',
  },
  bodyInput: { maxHeight: 250 },
  content: {
    width: '100%',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: { height: 150, width: 150 },
});
