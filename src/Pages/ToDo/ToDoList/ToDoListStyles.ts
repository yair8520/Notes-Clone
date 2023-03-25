import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { width: '100%', height: '100%', alignItems: 'center' },
  divider: {
    paddingTop: 5,
    paddingBottom: 5,
    width: '98%',
    alignSelf: 'center',
  },

  add: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    paddingTop: 5,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { width: 150, height: 150 },
});
