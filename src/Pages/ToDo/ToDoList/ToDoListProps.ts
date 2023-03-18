import { ITodoItem } from '../../../Features/ToDo/ToDoTypes';

export interface ToDoListProps {
  [key: string]: any;
  data: ITodoItem[];
  sectionId: string;
}
