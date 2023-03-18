import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { width: '100%' },
  title: {
    width: '100%',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hide: { overflow: 'hidden', height: 0 },
  icons: {
    flex: 1,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headline: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    borderWidth: 1.5,
    fontSize: 12,
  },
  sortIcon: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 16,
  },
  text: { color: 'white' },
});
