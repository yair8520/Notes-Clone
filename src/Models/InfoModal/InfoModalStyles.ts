import { StyleSheet } from 'react-native';
import { elementWidth } from '../../Utils/Sizes';

export default StyleSheet.create({
  container: {},
  centeredView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  inputCon: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderWidth: 2,
    borderColor: '#2fa7f8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 350,
    width: elementWidth(550),
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
  title: { alignSelf: 'flex-start', paddingLeft: '10%', paddingBottom: 25 },
  body: {
    width: '90%',
    alignItems: 'center',
    flex: 2,

    justifyContent: 'center',
  },
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
