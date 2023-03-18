import { ITodoItem } from '../../../Features/ToDo/ToDoTypes';

export interface ToDoItemProps {
  [key: string]: any;
  drag: () => void;
  isActive: boolean;
  data: ITodoItem;
}
