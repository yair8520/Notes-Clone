/* eslint-disable curly */
import { useMemo } from 'react';
import { ILink } from '../../Features/Links/LinksTypes';

export const useLinksFilter = ({
  searchQuery,
  links,
  filterDir,
}: {
  searchQuery: string;
  links: ILink[];
  filterDir: string;
}) => {
  let filteredLinks = useMemo(() => {
    let returnData = [...links];
    if (searchQuery) {
      returnData = returnData.filter((item) =>
        item.title.includes(searchQuery)
      );
    }
    if (filterDir === 'Ascending')
      return returnData.sort((a, b) => a.date!.localeCompare(b.date!));
    else {
      return returnData.sort((a, b) => b.date!.localeCompare(a.date!));
    }
  }, [links, searchQuery, filterDir]);
  return filteredLinks;
};
