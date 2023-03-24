/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { TemplateProps } from './FloatingButtonProps';
import styles from './FloatingButtonStyles';
import { FAB } from 'react-native-paper';
import { createPDF, shareOption } from './helpers';
import useKeyBoardStatus from '../../Hooks/useKeyBoardStatus/useKeyBoardStatus';
import { defaultActionsStyles } from '../../constant';
import { Linking } from 'react-native';
import { htmlToString } from '../../Helpers/helper';

export const FloatingButton = ({ data, onPress }: TemplateProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const onStateChange = ({ open }: any) => setOpen(open);
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
      ]}
      onStateChange={onStateChange}
    />
  );
};
