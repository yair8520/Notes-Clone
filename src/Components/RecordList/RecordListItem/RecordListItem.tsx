import { View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { RecordListItemProps } from './RecordListItemProps';
import styles from './RecordListItemStyles';
import { NText } from '../../Text';
import { ExpandableView } from '../../Animations';
import { Recorder } from '../../Recorder';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@ui-kitten/components';

export const RecordListItem = ({
  data,
  onSubmitEditing,
  isExpanded,
  setActiveIndex,
}: RecordListItemProps) => {
  const [IsDisabled, setIsDisabled] = useState(true);
  const toggleSection = () => {
    setActiveIndex(!isExpanded);
  };

  return (
    <LinearGradient colors={['#3184fc', '#9dc9ff']} style={styles.container}>
      <TouchableOpacity onPress={toggleSection}>
        <View style={styles.data}>
          <View style={styles.circle}>
            <View style={styles.duration}>
              <Icon name="clock-outline" style={styles.clock} />
              <NText style={styles.text} variant="p">
                {data.duration}
              </NText>
            </View>
          </View>
          <TouchableOpacity
            onPress={toggleSection}
            onLongPress={() => setIsDisabled(!IsDisabled)}
            style={styles.input}
          >
            <TextInput
              editable={!IsDisabled}
              style={styles.input}
              onSubmitEditing={(e) => {
                onSubmitEditing(e.nativeEvent.text, data.id);
                setIsDisabled(!IsDisabled);
              }}
            >
              <NText
                variant="H3"
                numberOfLines={1}
                adjustsFontSizeToFit
                style={styles.dateText}
              >
                {data.headline}
              </NText>
            </TextInput>
          </TouchableOpacity>
          <View style={styles.date}>
            <NText variant="p" style={styles.dateText}>
              {data.time}
            </NText>
            <NText variant="p" style={styles.dateText}>
              {data.date}
            </NText>
          </View>
        </View>
      </TouchableOpacity>
      <ExpandableView expanded={!isExpanded} toHeight={80}>
        <View style={styles.recordContainer}>
          <Recorder recordId={data.id} url={data.url} />
        </View>
      </ExpandableView>
    </LinearGradient>
  );
};
