import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  centeredView: {
    width: '100%',
    height: '100%',
  },
  errorText: {
    color: 'red',
  },
  inputCon: {
    width: '90%',
  },
  modalView: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 15,
  },
  viewWithIcon: {
    height: 280,
  },
  icon: {
    marginTop: 10,
    marginBottom: -40,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: 100,

    borderRadius: 15,
  },
  content: {
    flex: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: { alignSelf: 'flex-start', paddingLeft: '5%' },

  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 250,
    marginTop: 20,
  },
  input: {
    width: '90%',
  },
});
