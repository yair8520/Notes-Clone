/* eslint-disable quotes */
import { Text, View } from 'react-native';
import React from 'react';
import { LinkModalProps } from './LinkModalProps';
import styles from './LinkModalStyles';
import { NText } from '../../Components/Text';
import { useTranslation } from 'react-i18next';
import { Input } from '@ui-kitten/components';
import { Button } from 'react-native-paper';
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
      setError(`${t(`err.required`)}`);
    } else {
      insert(title, value);
      closeModal();
    }
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.body}>
        <View style={[styles.modalView]}>
          <NText variant="H1">{t(`modals.link.add`)}</NText>
          <View style={styles.inputCon}>
            <Input
              style={styles.input}
              value={title}
              label="title (optional)"
              placeholder="link Title"
              onChangeText={(nextValue) => setTitle(nextValue)}
            />
            <Input
              style={styles.input}
              value={value}
              caption={() => <Text style={styles.errorText}> {error}</Text>}
              label="link *"
              placeholder="paste your link here  "
              onChangeText={(nextValue) => setValue(nextValue)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              mode={'outlined'}
              textColor={'#3f7ee8'}
              onPress={() => closeModal()}
            >
              {t(`buttons.cancel`).toString()}
            </Button>
            <Button
              buttonColor={'#3f7ee8'}
              mode={'contained'}
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
