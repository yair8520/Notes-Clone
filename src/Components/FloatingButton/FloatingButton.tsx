/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { TemplateProps } from './FloatingButtonProps';
import styles from './FloatingButtonStyles';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { createPDF, shareOption } from './helpers';

export const FloatingButton = ({ setOption, noteId, data }: TemplateProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const nav = useNavigation<any>();
  const onStateChange = ({ open }: any) => setOpen(open);

  return (
    <FAB.Group
      style={styles.container}
      open={open}
      visible
      backdropColor={'transparent'}
      icon={open ? 'minus' : 'microsoft-xbox-controller-menu'}
      actions={[
        {
          icon: 'file-pdf-box',
          label: 'PDF',
          onPress: () => createPDF(data),
        },
        {
          icon: 'share',
          label: 'Share',
          onPress: () => shareOption(data),
        },
        {
          icon: 'draw',
          label: 'Draw',
          onPress: () => nav.navigate('DrawPannel', { noteId }),
        },
        {
          icon: 'signature',
          label: 'Sign',
          onPress: () => nav.navigate('DrawPannel', { noteId, sign: true }),
        },
      ]}
      onStateChange={onStateChange}
    />
  );
};
