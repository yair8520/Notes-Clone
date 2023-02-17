/* eslint-disable curly */
import { useMemo } from 'react';
import { INote } from '../../Features/Notes/NotesTypes';

export const useNotesFilter = ({
  searchQuery,
  notes,
  filterDir,
  type,
}: {
  searchQuery: string;
  notes: INote;
  filterDir: string;
  type: string;
}) => {
  let notesFiltered = useMemo(() => {
    let returnData = Object.entries(notes).filter(
      (item) => item[1].type === type
    );
    if (searchQuery) {
      returnData = returnData.filter(
        (item) => item[1].body.includes(searchQuery) && item[1].type === type
      );
    }
    if (filterDir === 'Ascending')
      return returnData.sort(
        (a, b) =>
          a[1].date.localeCompare(b[1].date) ||
          a[1].time.localeCompare(b[1].time)
      );
    else {
      return returnData.sort(
        (a, b) =>
          b[1].date.localeCompare(a[1].date) ||
          b[1].time.localeCompare(a[1].time)
      );
    }
  }, [notes, searchQuery, type, filterDir]);
  return notesFiltered;
};
