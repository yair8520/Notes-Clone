import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDate } from '../../Utils/Time';
import { ILink, LinkState } from './LinksTypes';

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
    removeLink: (state, { payload }: { payload: { index: number } }) => {
      state.links.splice(payload.index, 1);
    },
  },
});

export const { addLink, removeLink } = LinkSlice.actions;
export default LinkSlice.reducer;
