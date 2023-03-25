import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  section: {
    paddingTop: 25,
  },
  sectionHeader: {
    borderRadius: 8,
    height: 50,
  },
  scroll: {
    width: '95%',
    alignSelf: 'center',
  },

  icon: {
    width: 150,
    height: 150,
  },
  iconContainer: {
    alignSelf: 'center',
    width: '95%',
    transform: [{ scaleY: -1 }, { rotate: '180deg' }],
  },
  textContainer: {
    paddingTop: 25,
    alignSelf: 'center',
  },
});
