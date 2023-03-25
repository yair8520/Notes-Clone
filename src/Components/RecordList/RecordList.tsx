import { View, ScrollView, LayoutAnimation } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { IActiveIndex, RecordListProps } from './RecordListProps';
import styles from './RecordListStyles';
import { RecordListItem } from './RecordListItem';
import { IRecord } from '../../Features/Record/RecordTypes';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../Redux';
import { setRecordTitle } from '../../Features/Record/RecordSlice';
import { NText } from '../Text';
import { List } from 'react-native-paper';
import { useModal } from 'react-native-modalfy';
import { askPermission } from '../FloatingButton/helpers';
import { addMessage } from '../../Features/Links/LinkSlice';
import Lottie from 'lottie-react-native';
const PressArrow = require('../../Assets/Images/PressArrow.json');
export const RecordList = ({ array }: RecordListProps) => {
  const dispatch = useAppDispatch();
  const { openModal } = useModal();
  const [activeIndex, setActiveIndex] = useState<IActiveIndex>({
    open: true,
    index: 0,
  });
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [array]);
  const onSubmitEditing = useCallback(
    (headline: string, id: string) => {
      return dispatch(
        setRecordTitle({
          headline,
          id,
        })
      );
    },
    [dispatch]
  );
  const onAdd = () => {
    askPermission()
      .then(() => {
        openModal('RecordModal');
      })
      .catch((msg) => {
        dispatch(addMessage({ msg }));
      });
  };
  const handleIndex = useCallback((index: number) => {
    setActiveIndex((p) => {
      if (p.index === index) {
        return { index, open: !p.open };
      } else {
        return { index, open: true };
      }
    });
  }, []);

  const renderItems = ({ item, index }: any) => {
    return (
      <View style={styles.item}>
        <RecordListItem
          isExpanded={activeIndex.index === index && activeIndex.open}
          setActiveIndex={() => handleIndex(index)}
          onSubmitEditing={onSubmitEditing}
          data={item}
        />
      </View>
    );
  };
  return (
    <ScrollView
      horizontal={true}
      nestedScrollEnabled={true}
      contentContainerStyle={styles.container}
    >
      <View style={styles.title}>
        <NText variant="H2">Voice Memo`s</NText>
        <TouchableOpacity onPress={onAdd}>
          <List.Icon icon={'plus-circle'} />
        </TouchableOpacity>
      </View>
      {array.length !== 0 ? (
        <FlatList
          style={styles.list}
          nestedScrollEnabled={true}
          data={array}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: IRecord) => item.id}
          renderItem={renderItems}
        />
      ) : (
        <View style={styles.iconContainer}>
          <Lottie
            source={PressArrow}
            loop={false}
            autoPlay
            resizeMode="cover"
            style={styles.icon}
          />
        </View>
      )}
    </ScrollView>
  );
};
