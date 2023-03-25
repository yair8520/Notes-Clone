/* eslint-disable curly */
import { MutableRefObject } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { actions, RichEditor } from 'react-native-pell-rich-editor';

export const actionList = [
  actions.insertImage,
  actions.insertBulletsList,
  actions.setBold,
  actions.setItalic,
  actions.setUnderline,
  actions.alignLeft,
  actions.alignCenter,
  actions.alignRight,
  actions.undo,
  actions.redo,
  actions.keyboard,
];
export const onPressAddImage = async (
  _ref: MutableRefObject<RichEditor | undefined>
) => {
  launchImageLibrary({
    mediaType: 'photo',
    includeBase64: true,
    maxHeight: 350,
    maxWidth: 350,
  }).then((res) => {
    const str = `data:${res?.assets?.[0].type};base64,${res?.assets?.[0].base64}`;
    console.log(str);
    if (res?.assets?.[0].type) _ref.current?.insertImage(str);
  });
};
