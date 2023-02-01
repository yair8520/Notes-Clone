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
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
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
    borderColor: '#3f7ee8',
    borderRadius: 15,
  },
  content: {
    flex: 5,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {},
  body: {
    width: '100%',
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
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
