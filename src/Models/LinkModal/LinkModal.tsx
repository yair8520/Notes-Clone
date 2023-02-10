/* eslint-disable quotes */
import { View } from 'react-native';
import React from 'react';
import { LinkModalProps } from './LinkModalProps';
import styles from './LinkModalStyles';
import { NText } from '../../Components/Text';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { NInput } from '../../Components';
import { errorMsg } from '../../I18n/HebrewTranslations';
export const LinkModal = ({
  modal: { closeModal, getParam },
}: LinkModalProps) => {
  const { t } = useTranslation();
  const insert = getParam('insert');
  const data = getParam('data') ?? { value: '', title: '' };
  const [value, setValue] = React.useState(data.value);
  const [title, setTitle] = React.useState(data.title);
  const [error, setError] = React.useState('');

  const onSave = () => {
    if (!value) {
      setError(errorMsg.required);
    } else {
      insert(title, value);
      closeModal();
    }
  };
  return (
    <View style={styles.centeredView}>
      <View style={[styles.modalView]}>
        <View style={styles.body}>
          <NText bold style={styles.headline} variant="H1">
            {t(`modals.link.add`)}
          </NText>
          <View style={styles.inputCon}>
            <NInput
              label="Title"
              autoCapitalize="words"
              style={styles.input}
              onChange={(nextValue) => setTitle(nextValue)}
              value={title}
            />
            <NInput
              icon={'content-paste'}
              error={!!error}
              label="Link *"
              errorText={errorMsg.required}
              style={styles.input}
              onChange={(nextValue) => setValue(nextValue)}
              value={value}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              textColor={'#2ba6f8'}
              onPress={() => closeModal()}
            >
              {t(`buttons.cancel`).toString()}
            </Button>
            <Button
              textColor={'#2ba6f8'}
              style={styles.button}
              onPress={onSave}
            >
              {t(`buttons.save`).toString()}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
