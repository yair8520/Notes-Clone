import { Clipboard } from '@react-native-clipboard/clipboard/dist/Clipboard';
import { Alert, PermissionsAndroid, Share, Linking } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import { Inote } from '../../Features/Notes/NotesTypes';
import { htmlToString } from '../../Helpers/helper';
import { getCurrentTime, getFullDate } from '../../Utils/Time';

export const shareOption = async ({
  body,
  url,
}: {
  body: string;
  url?: string;
}) => {
  try {
    const result = await Share.share({
      message: `${htmlToString(body)}`,
      url: url ?? '',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error: any) {
    Alert.alert(body, url);
  }
};
export const copyOption = (text: string) => {
  Clipboard.setString(text);
};
export const pasteOption = () => {
  return Clipboard.getString();
};
export const openUrl = (url: string) => {
  Linking.openURL(`http://${url}`).catch((e) => console.log(e));
};
const isPermitted = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      { title: 'Asd' }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.log('Write permission err', err);
    return false;
  }
};

export const createPDF = async (data: any) => {
  if (await isPermitted()) {
    let options = {
      html: generateHtmlPdfContent(data),
      fileName: 'test',
      directory: 'docs',
    };
    await RNHTMLtoPDF.convert(options).then(({ filePath }) =>
      RNFetchBlob.android
        .actionViewIntent(filePath!, 'application/pdf')
        .then((a) => console.log(a))
        .catch((err) => console.log(err))
    );
  }
};
const generateHtmlPdfContent = (data: Inote) => {
  const { body, image, sign } = data;
  console.log(image);
  return `<html>
  <head>
    <style>
      .letter {
        width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        font-size: 25px;
        line-height: 1.5;
      }
      .letter h1 {
        height:100px;
        padding-top:25;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
      .letter img {
        padding:25;
        height:250px;
        width: 250px;
      }
      .letter .recipient {
        font-weight: bold;
        margin-bottom: 20px;
      }
      .letter .date {
        text-align: right;
        margin-bottom: 20px;
      }
      .letter .body {
        height:500px;
        text-align: justify;
        margin-bottom: 20px;
      }
      .letter .signature {
        text-align: right;
        font-style: italic;
      }
      .signature img{
        height:100px;
        padding:0;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div class="letter">
      <div class="date">
        <p>${getFullDate()}<br/>${getCurrentTime()}</p>
      </div>
      <div class="body">
        <p>${body}</p>

      </div>
      
      ${
        sign
          ? `<div class="signature">
      <img src="data:image/png;base64,${sign?.base64} alt="signature"/>
        <p>Jane Doe</p>
      </div>`
          : ''
      }
      
    </div>
  </body>
</html>`;
};
