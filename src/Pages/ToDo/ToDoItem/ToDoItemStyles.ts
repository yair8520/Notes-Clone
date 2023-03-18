import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 4,
  },
  rowItem: {},
  title: { paddingLeft: 15 },
  delete: {},
  input: { flex: 1 },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
  },
  dargIcon: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  card: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#3184fc',
  },
  dark: {
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: '#3184fc',
  },
});
