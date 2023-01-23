/* eslint-disable quotes */
import { View } from 'react-native';
import React from 'react';
import { InfoModalProps } from './InfoModalProps';
import styles from './InfoModalStyles';
import { NText } from '../../Components/Text';
import { useTranslation } from 'react-i18next';
import { NDropDown } from '../../Components/DropDown';
import { Button, Input } from '@ui-kitten/components';
import { useAppDispatch } from '../../Redux';
import { addCategory } from '../../Features/Notes/NotesSlice';
import { iconOptions } from '../../Components/DropDown/types';
export const InfoModal = ({ modal: { closeModal } }: InfoModalProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSave = () => {
    if (value) {
      dispatch(
        addCategory({
          title: value,
          icon: iconOptions[selectedIndex as keyof object],
        })
      );
    }
    closeModal();
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
              caption={'Asd'}
              label="Name *"
              placeholder="Place your Text"
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
              onPress={() => closeModal()}
              appearance="outline"
              status="danger"
            >
              {t(`buttons.cancel`).toString()}
            </Button>
            <Button
              style={styles.button}
              onPress={onSave}
              appearance="outline"
              status="success"
            >
              {t(`buttons.save`).toString()}
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
