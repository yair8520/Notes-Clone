export interface ToDoState {
  todoArray: IToDoObject;
}
export interface ITodoCategories {
  title: string;
  icon: string;
}

interface IToDoObject {
  [key: string]: ITodo;
}
interface ITodo {
  id: string;
  headline: string;
  items: ITodoItem[];
}
interface ITodoItem {
  id: string;
  title: string;
  checked: boolean;
}
