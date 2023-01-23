import { createSlice } from '@reduxjs/toolkit';
import { INote, NotesState } from './NotesTypes';

const initialState: NotesState = {
  notesArray: [],
  categories: [{ title: 'Work', icon: 'folder' }],
};

const NotesSlice = createSlice({
  name: 'Note',
  initialState,
  reducers: {
    addNote: (state, { payload }: { payload: INote }) => {
      state.notesArray.push(payload);
    },

    removeNote: (state, { payload }: { payload: INote }) => {
      console.log(payload);
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addNote, removeNote, addCategory } = NotesSlice.actions;
export default NotesSlice.reducer;
