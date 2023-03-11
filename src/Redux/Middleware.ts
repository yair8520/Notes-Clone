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
    console.log(action.type, state.link.links);
    addToFirestore('Links', state.link.links);
  }

  return result;
};

export default firestoreMiddleware;
