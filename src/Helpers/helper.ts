export const htmlToString = (html: string) => {
  return html?.replace(/<[^>]+>/g, ' ')?.replace(/((&nbsp;))*/gim, '');
};
export const extractTitle = (html: string) => {
  return htmlToString(html?.split('</div>')?.[0]) ?? '';
};
export const extractBody = (html: string) => {
  return htmlToString(html?.split('<div>')?.[2]) ?? '';
};
