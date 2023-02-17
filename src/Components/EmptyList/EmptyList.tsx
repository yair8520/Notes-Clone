import { View } from 'react-native';
import React from 'react';
import { EmptyListProps } from './EmptyListProps';
import styles from './EmptyListStyles';
import { Icon } from '@ui-kitten/components/ui';
import { NText } from '../Text';
export const EmptyList = ({ type }: EmptyListProps) => {
  const infiniteAnimationIconRef = React.useRef<any>();
  React.useEffect(() => {
    infiniteAnimationIconRef?.current?.startAnimation?.();
  }, []);
  return (
    <View style={styles.container}>
      <Icon
        ref={infiniteAnimationIconRef}
        animation="shake"
        animationConfig={{ useNativeDriver: true }}
        style={styles.icon}
        fill="#1d9df3"
        name={type === 'link' ? 'link-2-outline' : 'edit-2-outline'}
      />
      <NText
        style={styles.text}
        variant="H2"
      >{`No ${type} saved yet \n click on the '+' below to add a ${type} `}</NText>
    </View>
  );
};
