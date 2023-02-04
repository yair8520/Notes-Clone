import { Inote } from '../../Features/Notes/NotesTypes';

export interface NotesListItemProps {
  [key: string]: any;
  note: Inote;
  startAnimation: boolean;
}
