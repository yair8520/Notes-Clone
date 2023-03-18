import { RootState } from '../../Redux';

export const getToDo = (state: RootState) => state.todo.todoArray;
export const getTodoCategories = (state: RootState) =>
  state.todo.toDoCategories;
