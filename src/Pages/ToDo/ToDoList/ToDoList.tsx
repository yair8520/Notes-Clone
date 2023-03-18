/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useCallback } from 'react';
import { ToDoListProps } from './ToDoListProps';
import styles from './ToDoListStyles';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { ToDoItem } from '../ToDoItem';
import { ITodoItem } from '../../../Features/ToDo/ToDoTypes';
import { useAppDispatch } from '../../../Redux';
import {
  addTodo,
  deleteTodo,
  setChecked,
  setTodos,
  setTodoTitle,
} from '../../../Features/ToDo/ToDoSlice';
import { List } from 'react-native-paper';
import { NText } from '../../../Components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { BounceIn } from 'react-native-reanimated';

export const ToDoList = ({ data, sectionId }: ToDoListProps) => {
  const dispatch = useAppDispatch();
  const onChecked = useCallback(
    (id: string) => {
      dispatch(setChecked({ sectionId, id }));
    },
    [dispatch, sectionId]
  );
  const onChangeTitle = useCallback(
    (id: string, headline: string) => {
      dispatch(setTodoTitle({ sectionId, id, headline }));
    },
    [dispatch, sectionId]
  );
  const onDelete = useCallback(
    (id: string) => {
      dispatch(deleteTodo({ sectionId, id }));
    },
    [dispatch, sectionId]
  );
  const onAddTodo = () => dispatch(addTodo({ sectionId }));

  const renderItem = ({
    item,
    drag,
    isActive,
  }: RenderItemParams<ITodoItem>) => {
    return (
      <View style={styles.divider}>
        <ToDoItem
          data={item}
          onChecked={onChecked}
          onDelete={onDelete}
          onChangeTitle={onChangeTitle}
          drag={drag}
          isActive={isActive}
        />
      </View>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={false}
      horizontal={true}
    >
      <DraggableFlatList
        data={data}
        nestedScrollEnabled={true}
        itemEnteringAnimation={BounceIn.duration(700)}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        onDragEnd={({ data }) => dispatch(setTodos({ data, id: sectionId }))}
        dragItemOverflow={false}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.add} onPress={onAddTodo}>
            <List.Icon color={'#c7524b'} icon={'plus'} />
            <NText variant="H3">Add Task</NText>
          </TouchableOpacity>
        )}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};