import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { width: '100%' },
  title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hide: { overflow: 'hidden', height: 0 },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headline: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: { backgroundColor: '#c7524b', color: 'white' },
  sortIcon: {
    paddingRight: 15,
    paddingLeft: 15,
  },
});
