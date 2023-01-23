import { RootState } from '../../Redux';

export const getNotes = (state: RootState) => state.note.notesArray;
export const getCategories = (state: RootState) => state.note.categories;
export const notesById = (state: RootState) => state.note.categories;
