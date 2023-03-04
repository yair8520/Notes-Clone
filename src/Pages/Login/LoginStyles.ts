import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',

    alignSelf: 'center',
    flex: 1,
    width: '80%',
  },
  inputCon: { width: '100%', flex: 4 },
  header: {
    flex: 1,
    minHeight: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: { color: 'white' },
  buttonCon: { width: '100%', flex: 1, alignItems: 'center', paddingTop: 50 },
  button: { width: '80%', height: 50, justifyContent: 'center' },
  subText: { paddingTop: 20, flexDirection: 'row' },
  SignIn: {
    color: 'red',
    justifyContent: 'center',
  },
});
