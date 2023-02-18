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
