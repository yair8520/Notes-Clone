export const htmlToString = (html: string) => {
  return html.replace(/<[^>]+>/g, ' ').replace(/((&nbsp;))*/gim, '');
};
