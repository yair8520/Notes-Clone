import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  content: {
    width: '100%',
    flexGrow: 1,
  },
  emptyList: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
});
