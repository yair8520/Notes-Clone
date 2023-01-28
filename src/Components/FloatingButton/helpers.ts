import { Alert, PermissionsAndroid, Share } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import { Inote } from '../../Features/Notes/NotesTypes';
import { getCurrentTime, getFullDate } from '../../Utils/Time';

export const shareOption = async ({ headline, body, image }: any) => {
  try {
    const result = await Share.share({
      title: headline,
      message: `${headline} - ${body}`,
      url: image,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error: any) {
    Alert.alert(headline, body, image);
  }
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
  const { headline, body } = data;
  return `<html>
  <head>
    <style>
      /* Define a class for the letter container */
      .letter {
        width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
      }
      /* Define a class for the heading */
      .letter h1 {
        height:100px;
        padding-top:25;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
      /* Define a class for the recipient section */
      .letter .recipient {
        font-weight: bold;
        margin-bottom: 20px;
      }
      /* Define a class for the date */
      .letter .date {
        text-align: right;
        margin-bottom: 20px;
      }
      /* Define a class for the body */
      .letter .body {
        height:500px;
        text-align: justify;
        margin-bottom: 20px;
      }
      /* Define a class for the signature */
      .letter .signature {
        text-align: right;
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <div class="letter">
      <h1>${headline}</h1>
      <div class="date">
        <p>${getFullDate()}<br/>${getCurrentTime()}</p>
      </div>
      <div class="body">
        <p>${body}</p>

      </div>
      <div class="signature">
        <p>Jane Doe</p>
      </div>
    </div>
  </body>
</html>`;
};
