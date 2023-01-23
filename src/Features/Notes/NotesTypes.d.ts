export interface NotesState {
  notesArray: INote;
  categories: ICategories[];
}
interface ICategories {
  title: string;
  icon: string;
}
interface INote {
  [key: string]: Inote;
}
interface Inote {
  id: string;
  type: string;
  date: string;
  time: string;
  headline: string;
  body: string;
  image?: Iimages;
}
interface Iimages {
  points: any;
  base64: string;
}
interface IaddImage {
  id: string;
  points: any;
  base64: any;
}
