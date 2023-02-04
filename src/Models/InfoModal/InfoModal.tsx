/* eslint-disable quotes */
import { Text, View } from 'react-native';
import React from 'react';
import { InfoModalProps } from './InfoModalProps';
import styles from './InfoModalStyles';
import { NText } from '../../Components/Text';
import { useTranslation } from 'react-i18next';
import { NDropDown } from '../../Components/DropDown';
import { Input } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { addCategory } from '../../Features/Notes/NotesSlice';
import { iconOptions } from '../../Components/DropDown/types';
import { getCategories } from '../../Features/Notes/NotesSelectors';
import { Button } from 'react-native-paper';
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
    }
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.body}>
        <View style={[styles.modalView]}>
          <NText variant="H1">{t(`modals.info.add`)}</NText>
          <View style={styles.inputCon}>
            <Input
              style={styles.input}
              value={value}
              caption={() => <Text style={styles.errorText}> {error}</Text>}
              label="Name *"
              placeholder="Category"
              onChangeText={(nextValue) => setValue(nextValue)}
            />
            <NDropDown
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
        </View>
      </View>
    </View>
  );
};
