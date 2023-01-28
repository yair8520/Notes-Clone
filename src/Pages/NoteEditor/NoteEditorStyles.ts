import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 50,
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
    backgroundColor: 'white',
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    textAlignVertical: 'top',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  img: { height: 250, width: 250 },
});
