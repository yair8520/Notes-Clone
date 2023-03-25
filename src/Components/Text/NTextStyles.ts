import { StyleSheet } from 'react-native';
import { fontFamily, fontsSizes } from '../../constant';

export default StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'left',
    fontFamily: fontFamily.regular,
  },
  head: {
    fontSize: fontsSizes.head,
  },
  H1: {
    fontSize: fontsSizes.H1,
  },
  H2: {
    fontSize: fontsSizes.H2,
  },
  H3: {
    fontSize: fontsSizes.H3,
  },
  H4: {
    fontSize: fontsSizes.H4,
  },
  p: {
    fontSize: fontsSizes.p,
  },
  bold: {
    fontWeight: '800',
  },
  error: {
    color: 'red',
    fontSize: fontsSizes.H4,
  },
});
