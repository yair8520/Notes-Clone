import { View } from 'react-native';
import React, { useMemo } from 'react';
import { LinkListItemProps } from './LinkListItemProps';
import styles from './LinkListItemStyles';
import { NText } from '../../Text';
import { Icon } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';
import { JiggleView } from '../../Animations/JiggleView/JiggleView';
import { LinkMenu } from './LinkMenu';
import { List } from 'react-native-paper';
export const LinkListItem = ({
  data,
  startAnimation,
  deleteLink,
}: LinkListItemProps) => {
  const info = useMemo(() => {
    const a = { ...data };
    if (data.locked) {
      a.value = '******';
      a.title = '******';
    }
    return a;
  }, [data]);
  return (
    <JiggleView startAnimation={startAnimation}>
      <View style={styles.container}>
        {startAnimation && (
          <View style={styles.deleteButton}>
            <TouchableOpacity
              onPress={() => {
                deleteLink(data.id);
              }}
              style={styles.button}
            >
              <Icon name="close" fill={'white'} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.content}>
          <View style={styles.verticalLine} />
          <View style={styles.item}>
            <NText bold variant="H2">
              {info.title}
            </NText>
            <NText numberOfLines={1} variant="H4">
              {info.value}
            </NText>
          </View>
        </View>
        <View style={styles.date}>
          <LinkMenu id={data.id} data={info} style={styles.rightItem}>
            <NText style={styles.dateText} variant="p">
              {info.date}
            </NText>
            <List.Icon style={styles.icon} icon="dots-horizontal" />
          </LinkMenu>
        </View>
      </View>
    </JiggleView>
  );
};
