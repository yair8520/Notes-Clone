import { View, ScrollView } from 'react-native';
import React from 'react';
import { WelcomeProps } from './WelcomeProps';
import styles from './WelcomeStyles';
import { Layout, NText } from '../../Components';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { DrawerActions } from '@react-navigation/native';
import { CategoryList } from '../../Components/CategoryList/CategoryList';
import { useAppSelector } from '../../Redux';
import { getCategories } from '../../Features/Notes/NotesSelectors';
import { getUserInfo } from '../../Features/General/GeneralSelectors';
import { RecordList } from '../../Components/RecordList';
import { getRecords } from '../../Features/Record/RecordSelectors';
import Lottie from 'lottie-react-native';
const WelcomeAnim = require('../../Assets/Images/WelcomeAnim.json');

export const Welcome = ({ navigation }: WelcomeProps) => {
  const categories = useAppSelector(getCategories);
  const records = useAppSelector(getRecords);
  const user = useAppSelector(getUserInfo);

  return (
    <Layout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        horizontal={false}
      >
        <LinearGradient style={styles.header} colors={['#3184fc', '#9dc9ff']}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <List.Icon color="white" icon="menu" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headline}>
            <Lottie
              source={WelcomeAnim}
              loop={true}
              autoPlay
              style={styles.lottie}
            />
            <NText style={styles.text} variant="H2">
              {user.email}
            </NText>
          </View>
        </LinearGradient>

        <View style={styles.categoryList}>
          <CategoryList navigation={navigation} data={categories} />
        </View>
        <View style={styles.recordList}>
          <RecordList navigation={navigation} array={records} />
        </View>
      </ScrollView>
    </Layout>
  );
};
