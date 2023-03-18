import React, { useMemo, useState } from 'react';
import { ToDoProps } from './ToDoProps';
import styles from './ToDoStyles';
import { Layout } from '../../Components';
import { ToDoHeader } from '../../Components/Headers/CalendarHeader';
import { SectionView } from '../../Components/Animations/SectionView';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { getToDo } from '../../Features/ToDo/ToDoSelectors';
import { ITodo, IToDoObject } from '../../Features/ToDo/ToDoTypes';
import { ToDoList } from './ToDoList';
import { ScrollView } from 'react-native';
import { sortListTodo } from '../../Features/ToDo/ToDoSlice';
export const ToDo = ({ navigation }: ToDoProps) => {
  const dispatch = useAppDispatch();
  const [collapse, setCollapse] = useState(true);
  const todo: IToDoObject = useAppSelector(getToDo);
  const onSort = (sectionId: string) => dispatch(sortListTodo({ sectionId }));
  const list = useMemo(() => {
    return Object.entries(todo);
  }, [todo]);
  return (
    <Layout style={styles.container}>
      <ToDoHeader
        collapse={collapse}
        setCollapse={setCollapse}
        navigation={navigation}
        title={'Todo'}
      />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scroll}
      >
        {list.map(([id, item]: [string, ITodo]) => {
          return (
            <SectionView
              key={id}
              collapse={collapse}
              numberOfItems={item.items.length}
              style={styles.section}
              headerStyle={styles.sectionHeader}
              title={item.headline}
              onSort={() => onSort(id)}
            >
              <ToDoList sectionId={id} data={item.items} />
            </SectionView>
          );
        })}
      </ScrollView>
    </Layout>
  );
};
