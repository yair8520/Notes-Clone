import React from 'react';
import { NDropDownProps } from './NDropDownProps';
import styles from './NDropDownStyles';
import { Select, SelectItem } from '@ui-kitten/components';
import { List, MD3Colors } from 'react-native-paper';
import { NText } from '../Text';

export const NDropDown = ({
  style,
  selectedIndex,
  setSelectedIndex,
  label,
  data,
}: NDropDownProps) => {
  return (
    <Select
      style={[styles.container, style]}
      label={label}
      status="info"
      value={<NText>{data[selectedIndex as keyof object].title}</NText>}
      onSelect={({ row }) => setSelectedIndex(row)}
    >
      {data.map((item: any, index: any) => (
        <SelectItem
          key={`${item.title}${index}`}
          title={item.title}
          accessoryRight={() => (
            <List.Icon color={MD3Colors.neutralVariant30} icon={item.icon} />
          )}
        />
      ))}
    </Select>
  );
};
