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
import { Divider, List } from 'react-native-paper';
import { NText } from '../../../Components';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
      <ToDoItem
        data={item}
        onChecked={onChecked}
        onDelete={onDelete}
        onChangeTitle={onChangeTitle}
        drag={drag}
        isActive={isActive}
      />
    );
  };
  return (
    <DraggableFlatList
      data={data}
      ItemSeparatorComponent={() => <Divider style={styles.divider} />}
      style={styles.container}
      onDragEnd={({ data }) => dispatch(setTodos({ data, id: sectionId }))}
      animationConfig={{}}
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
  );
};
