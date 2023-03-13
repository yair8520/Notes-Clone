import { StyleSheet } from 'react-native';

const styles = (props?: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    right: { width: '10%' },
    left: { flex: 1 },
    divider: {
      height: 1,
      backgroundColor: !props?.isDark ? 'black' : 'white',
    },
    text: { marginHorizontal: 10 },
  });

export default styles;
