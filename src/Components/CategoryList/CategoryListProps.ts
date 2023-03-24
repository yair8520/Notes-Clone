import { ICategories } from '../../Features/Notes/NotesTypes';

export interface CategoryListProps {
  [key: string]: any;
  data: ICategories[];
}
