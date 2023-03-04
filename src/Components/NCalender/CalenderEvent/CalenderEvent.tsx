import { View } from 'react-native';
import React from 'react';
import { CalenderEventProps } from './CalenderEventProps';
import styles from './CalenderEventStyles';
import { NInput } from '../../Input';
import { CheckBox } from '@ui-kitten/components';
import { NText } from '../../Text';
import { Button } from 'react-native-paper';
import { NTimePicker } from '../../NTimePicker';
export const CalenderEvent = ({ date }: CalenderEventProps) => {
  const [checked, setChecked] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [time, setTime] = React.useState('');
  return (
    <View style={styles.container}>
      <NText variant="H2">{`Selected Date: ${date}`}</NText>
      <NInput
        label="Event Name"
        autoCapitalize="words"
        onChange={(nextValue) => setTitle(nextValue)}
        value={title}
      />
      <NInput
        label="Comment"
        autoCapitalize="words"
        onChange={(nextValue) => setTitle(nextValue)}
        value={title}
      />
      <View style={styles.footer}>
        <CheckBox
          checked={checked}
          onChange={(nextChecked) => setChecked(nextChecked)}
        >
          Alert Me
        </CheckBox>
        <View style={styles.time}>
          <NTimePicker setTime={setTime} />
          <NText>{time}</NText>
        </View>
        <Button
          onPress={() => console.log('press')}
          textColor={'#2ba6f8'}
          style={styles.button}
          mode={'outlined'}
        >
          Submit
        </Button>
      </View>
    </View>
  );
};
