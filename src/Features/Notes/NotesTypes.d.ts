export interface NotesState {
  notesArray: INote[];
  categories: ICategories[];
}
interface ICategories {
  title: string;
  icon: string;
}
interface INote {
  id: string;
  type: string;
  date: string;
  time: string;
  headline: string;
  body: string;
  image?: string;
}
