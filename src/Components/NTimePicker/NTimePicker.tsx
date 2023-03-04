import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { NTimePickerProps } from './NTimePickerProps';
import styles from './NTimePickerStyles';
export const NTimePicker = ({ setTime }: NTimePickerProps) => {
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }: any) => {
      setVisible(false);
      console.log({ hours, minutes });
      setTime(`${hours}:${minutes}`);
    },
    [setVisible]
  );

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        textColor={'#2ba6f8'}
        onPress={() => setVisible(true)}
        uppercase={false}
      >
        Select time
      </Button>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12}
        minutes={14}
      />
    </View>
  );
};
