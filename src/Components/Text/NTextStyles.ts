import { StyleSheet } from 'react-native';
import { fontsSizes } from '../../constant';

export default StyleSheet.create({
  text: {
    color: 'black',
    textAlign: 'left',
  },
  head: {
    fontWeight: '600',
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
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: fontsSizes.H4,
  },
});
