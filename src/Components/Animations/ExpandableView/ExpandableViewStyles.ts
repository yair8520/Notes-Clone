import { StyleSheet } from 'react-native';

export const styles = ({ height }: any) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      height,
      overflow: height ? 'hidden' : 'visible',
      width: '100%',
    },
  });
