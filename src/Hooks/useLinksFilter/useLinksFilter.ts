/* eslint-disable curly */
import { useMemo } from 'react';
import { Links } from '../../Features/Links/LinksTypes';

export const useLinksFilter = ({
  searchQuery,
  links,
  filterDir,
}: {
  searchQuery: string;
  links: Links;
  filterDir: string;
}) => {
  let filteredLinks = useMemo(() => {
    let returnData = Object.entries(links);
    if (searchQuery) {
      returnData = returnData.filter((item) =>
        item[1].title.includes(searchQuery)
      );
    }
    if (filterDir === 'Ascending')
      return returnData.sort((a, b) => a[1].date!.localeCompare(b[1].date!));
    else {
      return returnData.sort((a, b) => b[1].date!.localeCompare(a[1].date!));
    }
  }, [links, searchQuery, filterDir]);
  return filteredLinks;
};
