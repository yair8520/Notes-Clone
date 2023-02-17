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
  body: string;
  color?: string;
  image?: Iimages;
  sign?: ISign;
  locked?: boolean;
}
interface Iimages {
  points: any;
  base64: string;
}
interface ISign {
  points: any;
  base64: string;
}
interface IaddImage {
  id: string;
  points: any;
  base64: any;
}
interface IaddSign {
  id: string;
  points: any;
  base64: any;
}
