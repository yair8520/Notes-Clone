import { createSlice } from '@reduxjs/toolkit';
import { generateColor } from '../../Theme/Colors';
import {
  IaddImage,
  IaddSign,
  ICategories,
  Inote,
  NotesState,
} from './NotesTypes';

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
    addNote: (state, { payload }: { payload: Inote }) => {
      state.notesArray[payload.id] = {
        ...state.notesArray[payload.id],
        ...payload,
        color: !state.notesArray[payload.id]?.color
          ? generateColor()
          : state.notesArray[payload.id].color,
      };
      console.log('addNote', state.notesArray[payload.id].body);
    },
    addImage: (state, { payload }: { payload: IaddImage }) => {
      const { id, points, base64 } = payload;
      state.notesArray[id].image = { points, base64 };
    },
    addSign: (state, { payload }: { payload: IaddSign }) => {
      const { id, points, base64 } = payload;
      state.notesArray[id].sign = { points, base64 };
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
    },
  },
});

export const { addNote, removeNote, addCategory, addImage, addSign, lockNote } =
  NotesSlice.actions;
export default NotesSlice.reducer;
