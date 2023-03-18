/* eslint-disable quotes */
import { View } from 'react-native';
import React from 'react';
import { ToDoModalProps } from './ToDoModalProps';
import styles from './ToDoModalStyles';
import { NText } from '../../Components/Text';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { NInput } from '../../Components';
import { errorMsg } from '../../I18n/HebrewTranslations';
import { Layout } from '../../Components/Layout';
export const ToDoModal = ({
  modal: { closeModal, getParam },
}: ToDoModalProps) => {
  const { t } = useTranslation();
  const insert = getParam('insert');

  const [headline, setHeadline] = React.useState('');
  const [error, setError] = React.useState('');

  const onSave = () => {
    if (!headline) {
      setError(errorMsg.required);
    } else {
      insert(headline);
      closeModal();
    }
  };
  return (
    <View style={styles.centeredView}>
      <Layout style={styles.modalView}>
        <View style={styles.body}>
          <NText bold style={styles.headline} variant="H1">
            {t(`modals.Todo.add`)}
          </NText>
          <View style={styles.inputCon}>
            <NInput
              numberOfLines={1}
              error={!!error}
              label="Section Title *"
              errorText={errorMsg.required}
              style={styles.input}
              onChange={(nextValue) => setHeadline(nextValue)}
              value={headline}
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
      </Layout>
    </View>
  );
};
