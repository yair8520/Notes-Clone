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
  categories: [{ title: 'Work', icon: 'folder' }],
};

const NotesSlice = createSlice({
  name: 'Note',
  initialState,
  reducers: {
    addNote: (state, { payload }: { payload: Inote }) => {
      console.log(payload);
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
      console.log('IaddSign', id);
      state.notesArray[id].sign = { points, base64 };
    },
    removeNote: (state, { payload }: { payload: { noteId: string } }) => {
      delete state.notesArray[payload.noteId];
    },
    addCategory: (state, { payload }: { payload: ICategories }) => {
      console.log('action.payload', payload);
      state.categories.push(payload);
    },
  },
});

export const { addNote, removeNote, addCategory, addImage, addSign } =
  NotesSlice.actions;
export default NotesSlice.reducer;
