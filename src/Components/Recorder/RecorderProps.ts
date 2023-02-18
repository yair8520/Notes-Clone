import { RecordBackType } from 'react-native-audio-recorder-player';
import { Inote } from '../../Features/Notes/NotesTypes';

export interface RecorderProps {
  [key: string]: any;
  noteId: string;
  currentNote: Inote;
}
export interface IPlayer extends RecordBackType {
  file?: string;
  duration: number;
}
