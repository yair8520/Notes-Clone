/* eslint-disable quotes */
import { View } from 'react-native';
import React from 'react';
import { InfoModalProps } from './InfoModalProps';
import styles from './InfoModalStyles';
import { NText } from '../../Components/Text';
import { useTranslation } from 'react-i18next';
import { NDropDown } from '../../Components/DropDown';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { addCategory } from '../../Features/Notes/NotesSlice';
import { iconOptions } from '../../Components/DropDown/types';
import { getCategories } from '../../Features/Notes/NotesSelectors';
import { Button } from 'react-native-paper';
import { NInput } from '../../Components';
import { Layout } from '../../Components/Layout';
export const InfoModal = ({ modal: { closeModal } }: InfoModalProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onSave = () => {
    if (value) {
      let dup = categories.find((c) => {
        return c.title === value;
      });
      if (!dup) {
        dispatch(
          addCategory({
            title: value,
            icon: iconOptions[selectedIndex as keyof object].icon,
          })
        );
        closeModal();
      } else {
        setError(`${t(`err.existCategory`)}`);
      }
    } else {
      setError(`${t(`err.required`)}`);
    }
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.body}>
        <Layout style={[styles.modalView]}>
          <NText style={styles.title} variant="H1">
            {t(`modals.info.add`)}
          </NText>
          <View style={styles.inputCon}>
            <NInput
              style={styles.input}
              value={value}
              error={!!error}
              errorText={error}
              label="Category"
              onChange={(nextValue) => setValue(nextValue)}
            />
            <NDropDown
              style={styles.input}
              data={iconOptions}
              label="Select Icon"
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
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
        </Layout>
      </View>
    </View>
  );
};
