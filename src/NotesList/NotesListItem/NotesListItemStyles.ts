import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: 'row',
    borderColor: '#f6f6f6',
    marginTop: 25,
  },
  verticalLine: {
    alignSelf: 'center',
    height: '90%',

    width: 5,
    backgroundColor: '#1d9df3',
    borderRadius: 12,
  },
  closeIcon: { height: 15, width: 15 },
  item: { paddingLeft: 15 },
  rightItem: { marginRight: 10, alignItems: 'flex-end' },
  content: {
    flexDirection: 'row',
    padding: 10,
    width: '50%',
  },
  date: {
    flexDirection: 'row-reverse',

    padding: 10,
    width: '50%',
  },
  dateText: {
    color: 'grey',
    textAlign: 'right',
    paddingBottom: 5,
  },
  icon: {
    height: 20,
    width: 20,
  },
  button: {
    backgroundColor: 'red',
    height: 20,
    width: 20,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    position: 'absolute',
    top: -10,
    right: 0,
    zIndex: 5,
  },
  locked: {
    position: 'absolute',
    top: -15,
    left: 0,
    zIndex: 5,
  },
  record: {
    position: 'absolute',
    top: -15,
    left: 20,
    zIndex: 5,
  },
});
