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
  body: {
    width: '90%',
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  icon: { height: 200, width: 200 },
  button: {},
});
