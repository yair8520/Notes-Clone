import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDate } from '../../Utils/Time';
import { IEditLink, ILink, LinkState } from './LinksTypes';

const initialState: LinkState = {
  links: [{ title: 'google', value: 'www.google.co.il', date: '03 Feb 23' }],
};

const LinkSlice = createSlice({
  name: 'Link',
  initialState,
  reducers: {
    addLink: (state, { payload }: { payload: ILink }) => {
      state.links.push({ ...payload, date: getCurrentDate() });
    },
    editLink: (state, { payload }: { payload: IEditLink }) => {
      const { index, title, value } = payload;
      state.links[index] = { ...state.links[index], title, value };
    },
    removeLink: (state, { payload }: { payload: { index: number } }) => {
      state.links.splice(payload.index, 1);
    },
  },
});

export const { addLink, removeLink, editLink } = LinkSlice.actions;
export default LinkSlice.reducer;
