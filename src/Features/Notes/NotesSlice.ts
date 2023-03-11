import { createSlice } from '@reduxjs/toolkit';
import { addToFirestore } from '../../Helpers/FireBase';
import { ICategories, INote, Inote, NotesState } from './NotesTypes';

const initialState: NotesState = {
  notesArray: {},
  categories: [
    { title: 'Work', icon: 'folder' },
    { title: 'WishList', icon: 'shopping' },
    { title: 'Personal', icon: 'face-man' },
  ],
};

const NotesSlice = createSlice({
  name: 'Note',
  initialState,
  reducers: {
    setInitialNotes: (state, { payload }: { payload: { notes: INote } }) => {
      state.notesArray = payload.notes;
    },
    addNote: (state, { payload }: { payload: Inote }) => {
      state.notesArray[payload.id] = {
        ...state.notesArray[payload.id],
        ...payload,
      };
    },
    removeNote: (state, { payload }: { payload: { noteId: string } }) => {
      delete state.notesArray[payload.noteId];
    },
    lockNote: (state, { payload }: { payload: { noteId: string } }) => {
      if (state.notesArray[payload.noteId].locked) {
        state.notesArray[payload.noteId].locked = false;
      } else {
        state.notesArray[payload.noteId].locked = true;
      }
    },
    addCategory: (state, { payload }: { payload: ICategories }) => {
      state.categories.push(payload);
      addToFirestore('categories', state.categories);
    },
    addRecord: (
      state,
      { payload }: { payload: { noteId: string; file: string } }
    ) => {
      state.notesArray[payload.noteId].record = payload.file;
    },
  },
});

export const {
  addNote,
  removeNote,
  addCategory,
  lockNote,
  addRecord,
  setInitialNotes,
} = NotesSlice.actions;
export default NotesSlice.reducer;
