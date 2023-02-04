import { RootState } from '../../Redux';

export const getLinks = (state: RootState) => state.link.links;
