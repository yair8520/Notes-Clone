/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { TemplateProps } from './FloatingButtonProps';
import styles from './FloatingButtonStyles';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export const FloatingButton = ({ setOption, noteId }: TemplateProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const nav = useNavigation();
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
          onPress: () => setOption('PDF'),
        },
        {
          icon: 'email',
          label: 'Email',
          onPress: () => setOption('Email'),
        },
        {
          icon: 'share',
          label: 'Share',
          onPress: () => setOption('Share'),
        },
        {
          icon: 'draw',
          label: 'Draw',
          onPress: () => nav.navigate('DrawPannel', { noteId }),
        },
        {
          icon: 'signature',
          label: 'Sign',
          onPress: () => setOption('Sign'),
        },
      ]}
      onStateChange={onStateChange}
    />
  );
};
