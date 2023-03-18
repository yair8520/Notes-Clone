/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { View, LayoutAnimation, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SectionViewProps } from './SectionViewProps';
import styles from './SectionViewStyles';
import { Badge, List } from 'react-native-paper';
import { NText } from '../../Text';
import LinearGradient from 'react-native-linear-gradient';

export const SectionView = ({
  children,
  title,
  style,
  numberOfItems,
  headerStyle,
  collapse,
  onSort,
}: SectionViewProps) => {
  useEffect(() => {
    toggleSection();
  }, [collapse]);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSection = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <View style={[styles.container, style]}>
        <LinearGradient
          colors={['#3184fc', '#9dc9ff']}
          style={styles.linearGradient}
        >
          <TouchableOpacity
            style={[styles.title, headerStyle]}
            onPress={toggleSection}
          >
            <View style={styles.headline}>
              <List.Icon
                color={'white'}
                icon={!isExpanded ? 'chevron-up' : 'chevron-down'}
              />
              <NText style={styles.text} bold variant="H2">
                {title}
              </NText>
            </View>
            <View style={styles.icons}>
              {numberOfItems > 0 && (
                <Badge style={styles.badge}>{numberOfItems}</Badge>
              )}
              {!isExpanded && numberOfItems > 0 && (
                <TouchableOpacity onPress={onSort} style={styles.sortIcon}>
                  <List.Icon color={'white'} icon={'sort'} />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <View style={isExpanded ? styles.hide : {}}>{children}</View>
      </View>
    </>
  );
};
