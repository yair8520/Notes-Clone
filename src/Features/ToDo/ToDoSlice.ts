import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import { findTodo, sortTodo } from '../../Helpers/helper';
import { ITodo, ITodoItem, ToDoState } from './ToDoTypes';

const initialState: ToDoState = {
  todoArray: {
    '0': {
      headline: 'test',
      id: '0',
      items: [
        { title: 'test 1', checked: true, id: '1' },
        { title: 'test 2', checked: true, id: '2' },
        { title: 'test 3', checked: true, id: '3' },
        { title: 'test 4', checked: true, id: '4' },
        { title: 'test 5', checked: true, id: '5' },
        { title: 'test 6', checked: true, id: '6' },
        { title: 'test 7', checked: true, id: '7' },
        { title: 'test 8', checked: true, id: '8' },
        { title: 'test 9', checked: true, id: '9' },
      ],
    },
    '1': {
      headline: 'test2',
      id: '0',
      items: [{ title: 'test item', checked: true, id: '123' }],
    },
  },
};

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodoItem: (state, { payload }: { payload: ITodo }) => {
      state.todoArray[payload.id] = {
        ...state.todoArray[payload.id],
        ...payload,
      };
    },
    sortListTodo: (state, { payload }: { payload: { sectionId: string } }) => {
      state.todoArray[payload.sectionId].items = sortTodo(
        state.todoArray[payload.sectionId].items
      );
    },
    addTodoSection: (state, { payload }: { payload: { headline: string } }) => {
      const id = uid(16);
      state.todoArray[uid(16)] = {
        headline: payload.headline,
        id,
        items: [],
      };
    },
    addTodo: (state, { payload }: { payload: { sectionId: string } }) => {
      const id = uid(16);
      state.todoArray[payload.sectionId].items.push({
        checked: false,
        id,
        title: '',
      });
    },
    setTodos: (
      state,
      { payload }: { payload: { data: ITodoItem[]; id: string } }
    ) => {
      console.log(payload);
      state.todoArray[payload.id].items = payload.data;
    },
    setChecked: (
      state,
      { payload }: { payload: { sectionId: string; id: string } }
    ) => {
      const index = findTodo(
        state.todoArray[payload.sectionId].items,
        payload.id
      );
      state.todoArray[payload.sectionId].items[index].checked =
        !state.todoArray[payload.sectionId].items[index].checked;
    },
    setTodoTitle: (
      state,
      {
        payload,
      }: { payload: { sectionId: string; id: string; headline: string } }
    ) => {
      const index = findTodo(
        state.todoArray[payload.sectionId].items,
        payload.id
      );
      state.todoArray[payload.sectionId].items[index].title = payload.headline;
    },
    deleteTodo: (
      state,
      { payload }: { payload: { sectionId: string; id: string } }
    ) => {
      const index = findTodo(
        state.todoArray[payload.sectionId].items,
        payload.id
      );
      state.todoArray[payload.sectionId].items.splice(index, 1);
    },
  },
});

export const {
  addTodoItem,
  setTodos,
  addTodoSection,
  setChecked,
  deleteTodo,
  setTodoTitle,
  addTodo,
  sortListTodo,
} = TodoSlice.actions;
export default TodoSlice.reducer;
