import { IRecord } from '../Features/Record/RecordTypes';
import { ITodoItem } from '../Features/ToDo/ToDoTypes';

export const htmlToString = (html: string) => {
  return html?.replace(/<[^>]+>/g, ' ')?.replace(/((&nbsp;))*/gim, '');
};
export const extractTitle = (html: string) => {
  return htmlToString(html?.split('</div>')?.[0]) ?? '';
};
export const extractBody = (html: string) => {
  return htmlToString(html?.split('<div>')?.[2]) ?? '';
};
export const msToTime = (ms: number) => {
  var seconds = Math.floor((ms / 1000) % 60),
    minutes = Math.floor((ms / (1000 * 60)) % 60),
    minutes = minutes < 10 ? 0 + minutes : minutes;
  seconds = seconds < 10 ? 0 + seconds : seconds;

  return minutes + ':' + seconds;
};
export const findTodo = (array: ITodoItem[], id: string) => {
  return array.findIndex((a) => {
    return a.id === id;
  });
};
export const findRecord = (array: IRecord[], id: string) => {
  return array.findIndex((a) => {
    return a.id === id;
  });
};
export const sortTodo = (array: ITodoItem[]) => {
  return array.sort((a, b) =>
    a.checked === b.checked ? 0 : a.checked ? 1 : -1
  );
};
export const getNextHeadLine = (array: IRecord[]) => {
  return `Record ${array.length + 1}`;
};
