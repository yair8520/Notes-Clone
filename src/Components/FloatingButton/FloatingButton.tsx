/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { TemplateProps } from './FloatingButtonProps';
import styles from './FloatingButtonStyles';
import { FAB } from 'react-native-paper';
import { askPermission, createPDF, shareOption } from './helpers';
import useKeyBoardStatus from '../../Hooks/useKeyBoardStatus/useKeyBoardStatus';
import { defaultActionsStyles } from '../../constant';
import { Linking } from 'react-native';
import { addMessage } from '../../Features/Links/LinkSlice';
import { useAppDispatch } from '../../Redux';
import { htmlToString } from '../../Helpers/helper';

export const FloatingButton = ({
  data,
  onPress,
  openVoiceMemo,
}: TemplateProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const onStateChange = ({ open }: any) => setOpen(open);
  const dispatch = useAppDispatch();
  const { keyboardStatus } = useKeyBoardStatus();
  return (
    <FAB.Group
      onPress={() => onPress()}
      style={styles.container}
      open={open}
      visible={!keyboardStatus}
      backdropColor={'transparent'}
      fabStyle={styles.fab}
      color={'white'}
      theme={{ colors: { accent: 'blue' } }}
      icon={open ? 'minus' : 'microsoft-xbox-controller-menu'}
      actions={[
        {
          ...defaultActionsStyles,
          icon: 'file-pdf-box',
          label: 'PDF',
          onPress: () => createPDF(data),
        },
        {
          ...defaultActionsStyles,
          icon: 'share',
          label: 'Share',
          onPress: () => {
            shareOption(data);
          },
        },
        {
          ...defaultActionsStyles,
          icon: 'email',
          label: 'Mail',
          onPress: () => {
            Linking.openURL(`mailto:?subject=&body=${htmlToString(data.body)}`);
            // shareOption(data);
          },
        },
        {
          ...defaultActionsStyles,
          icon: 'record-rec',
          label: 'Voice Memo',
          onPress: async () => {
            askPermission().then((res) =>
              res
                ? openVoiceMemo((p: boolean) => {
                    return !p;
                  })
                : dispatch(addMessage({ msg: 'Please confirm permissions' }))
            );
          },
        },
        // {
        //   ...defaultActionsStyles,
        //   icon: 'draw',
        //   label: 'Draw',
        //   onPress: () => nav.navigate('DrawPannel', { noteId }),
        // },
        // {
        //   ...defaultActionsStyles,
        //   icon: 'signature',
        //   label: 'Sign',
        //   onPress: () => nav.navigate('DrawPannel', { noteId, sign: true }),
        // },
      ]}
      onStateChange={onStateChange}
    />
  );
};
