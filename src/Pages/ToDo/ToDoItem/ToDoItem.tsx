import { TouchableOpacity, View, TextInput } from 'react-native';
import React from 'react';
import { ToDoItemProps } from './ToDoItemProps';
import styles from './ToDoItemStyles';
import { NText } from '../../../Components';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import { Card, Checkbox, List } from 'react-native-paper';
import { useAppSelector } from '../../../Redux';
import { getTheme } from '../../../Features/General/GeneralSelectors';

export const ToDoItem = ({
  drag,
  data,
  isActive,
  onChecked,
  onDelete,
  onChangeTitle,
}: ToDoItemProps) => {
  const onSubmitEditing = (e: { nativeEvent: { text: string } }) => {
    if (data.title !== e.nativeEvent.text) {
      onChangeTitle(data.id, e.nativeEvent.text);
    }
  };
  const isDark = useAppSelector(getTheme);
  return (
    <ScaleDecorator activeScale={0.9}>
      <Card style={[styles.card, isDark ? styles.dark : {}]}>
        <View style={styles.container}>
          <View style={styles.icons}>
            <Checkbox
              color="#3184fc"
              status={data.checked ? 'checked' : 'unchecked'}
              uncheckedColor={'#3184fc'}
              onPress={() => onChecked?.(data.id)}
            />
            <TextInput style={styles.input} onSubmitEditing={onSubmitEditing}>
              <NText
                variant="H3"
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[styles.title, data.checked && styles.line]}
              >
                {data.title}
              </NText>
            </TextInput>
          </View>
          <View style={styles.options}>
            {data.checked && (
              <TouchableOpacity onPress={() => onDelete?.(data.id)}>
                <List.Icon color="red" icon={'trash-can-outline'} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.dargIcon}
              onLongPress={drag}
              disabled={isActive}
            >
              <List.Icon icon={'drag'} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </ScaleDecorator>
  );
};
