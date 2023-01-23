import { createSlice } from '@reduxjs/toolkit';
import { IaddImage, Inote, INote, NotesState } from './NotesTypes';

const initialState: NotesState = {
  notesArray: {},
  categories: [{ title: 'Work', icon: 'folder' }],
};

const NotesSlice = createSlice({
  name: 'Note',
  initialState,
  reducers: {
    addNote: (state, { payload }: { payload: Inote }) => {
      state.notesArray[payload.id] = payload;
    },
    addImage: (state, { payload }: { payload: IaddImage }) => {
      const { id, points, base64 } = payload;
      state.notesArray[id].image = { points, base64 };
    },
    removeNote: (state, { payload }: { payload: INote }) => {
      console.log(payload);
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addNote, removeNote, addCategory, addImage } =
  NotesSlice.actions;
export default NotesSlice.reducer;
