import { createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import { findTodo, sortTodo } from '../../Helpers/helper';
import { ITodo, ITodoItem, IToDoObject, ToDoState } from './ToDoTypes';

const initialState: ToDoState = {
  todoArray: {},
};

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    setInitialTodos: (
      state,
      { payload }: { payload: { todos: IToDoObject } }
    ) => {
      state.todoArray = payload.todos;
    },
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
    removeSection: (state, { payload }: { payload: { sectionId: string } }) => {
      delete state.todoArray[payload.sectionId];
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
  removeSection,
  sortListTodo,
  setInitialTodos,
} = TodoSlice.actions;
export default TodoSlice.reducer;
