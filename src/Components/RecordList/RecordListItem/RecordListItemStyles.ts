import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: '#f5f3f1',
  },
  data: {
    minHeight: 80,
    borderRadius: 20,
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: { color: 'black' },
  recordContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  hide: { overflow: 'hidden', height: 0 },
  radiusTop: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  radiusBottom: {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  date: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  duration: { alignItems: 'center', justifyContent: 'center' },
  icon: {},
  circle: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
  input: { flex: 4, paddingLeft: 15 },
  clock: { width: 15, height: 15 },
});
