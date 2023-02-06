/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { TemplateProps } from './FloatingButtonProps';
import styles from './FloatingButtonStyles';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createPDF, shareOption } from './helpers';
import useKeyBoardStatus from '../../Hooks/useKeyBoardStatus/useKeyBoardStatus';
import { defaultActionsStyles } from '../../constant';

export const FloatingButton = ({ noteId, data }: TemplateProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const nav = useNavigation<any>();
  const onStateChange = ({ open }: any) => setOpen(open);

  const { keyboardStatus } = useKeyBoardStatus();
  return (
    <FAB.Group
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
            console.log(data);
            shareOption(data);
          },
        },
        {
          ...defaultActionsStyles,
          icon: 'draw',
          label: 'Draw',
          onPress: () => nav.navigate('DrawPannel', { noteId }),
        },
        {
          ...defaultActionsStyles,
          icon: 'signature',
          label: 'Sign',
          onPress: () => nav.navigate('DrawPannel', { noteId, sign: true }),
        },
      ]}
      onStateChange={onStateChange}
    />
  );
};
