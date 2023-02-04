import { View } from 'react-native';
import React from 'react';
import { LinkListItemProps } from './LinkListItemProps';
import styles from './LinkListItemStyles';
import { NText } from '../../Text';
import { Icon } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';
import { JiggleView } from '../../JiggleView/JiggleView';
import { LinkMenu } from './LinkMenu';
export const LinkListItem = ({
  data,
  startAnimation,
  deleteLink,
  index,
}: LinkListItemProps) => {
  return (
    <JiggleView startAnimation={startAnimation}>
      <View style={styles.container}>
        {startAnimation && (
          <View style={styles.deleteButton}>
            <TouchableOpacity
              onPress={() => {
                console.log('asd');
                deleteLink(index);
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
              {data.title}
            </NText>
            <NText variant="H4">{data.value}</NText>
          </View>
        </View>
        <View style={styles.date}>
          <LinkMenu index={index} data={data} style={styles.rightItem}>
            <NText style={styles.dateText} variant="p">
              {data.date}
            </NText>
            <Icon style={styles.icon} name="more-horizontal-outline" />
          </LinkMenu>
        </View>
      </View>
    </JiggleView>
  );
};
