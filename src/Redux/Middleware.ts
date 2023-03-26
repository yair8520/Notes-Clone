import { addToFirestore } from '../Helpers/FireBase';
import { RootState } from './Store';

const firestoreMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  const state: RootState = store.getState();
  if (
    action.type === 'Note/addNote' ||
    action.type === 'Note/removeNote' ||
    action.type === 'Note/lockNote' ||
    action.type === 'Note/addRecord'
  ) {
    addToFirestore('notes', state.note.notesArray);
  } else if (
    action.type === 'Link/addLink' ||
    action.type === 'Link/editLink' ||
    action.type === 'Link/removeLink' ||
    action.type === 'Link/lockLink'
  ) {
    addToFirestore('Links', state.link.links);
  } else if (
    action.type === 'Todo/addTodo' ||
    action.type === 'Todo/addTodoItem' ||
    action.type === 'Todo/addTodoSection' ||
    action.type === 'Todo/removeSection' ||
    action.type === 'Todo/deleteTodo' ||
    action.type === 'Todo/setTodoTitle' ||
    action.type === 'Todo/setChecked'
  ) {
    addToFirestore('Todo', state.todo.todoArray);
  }

  return result;
};

export default firestoreMiddleware;
