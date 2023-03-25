import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { width: '100%', alignItems: 'center', flexDirection: 'column' },
  itemHeader: { height: 60, borderRadius: 0 },
  item: { width: '100%', padding: 15 },
  title: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  list: { width: '100%' },
  icon: {
    width: 150,
    height: 150,
  },
  iconContainer: {
    alignSelf: 'center',
    width: '95%',
    transform: [{ scaleY: -1 }, { rotate: '180deg' }],
  },
});
