/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { NCalenderProps } from './NCalenderProps';
import styles from './NCalenderStyles';
import { Calendar } from 'react-native-calendars';
import { DateData, MarkedDates } from 'react-native-calendars/src/types';
import { Layout } from '../Layout';
import { CalenderEvent } from './CalenderEvent';
import { ScrollView } from 'react-native-gesture-handler';
import { ExpandableView } from '../ExpandableView';
import { CalendarHeader } from '../Headers/CalendarHeader';

export const NCalender = ({ navigation }: NCalenderProps) => {
  const [dates, setDates] = useState<MarkedDates>();
  const [current, setCurrent] = useState<string>();
  const onChange = (e: DateData) => {
    const { dateString } = e;
    if (dates?.[dateString as keyof object]?.marked) {
      setCurrent('');
      setDates((p: any) => {
        return {
          ...p?.dates,
          [dateString]: {
            marked: false,
          },
        };
      });
    } else {
      setCurrent(dateString);
      setDates((p: any) => {
        return {
          ...p?.dates,
          [dateString]: {
            marked: true,
            dotColor: 'red',
            activeOpacity: 0,
          },
        };
      });
    }
  };
  return (
    <Layout>
      <CalendarHeader title="Calendar" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <Calendar
          style={styles.calendarCon}
          markingType={'period'}
          onDayPress={onChange}
          markedDates={dates}
        />

        <ExpandableView expanded={!current}>
          <CalenderEvent date={current} />
        </ExpandableView>
      </ScrollView>
    </Layout>
  );
};
