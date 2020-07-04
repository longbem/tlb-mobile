import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';

export default function Home() {
  const [dateCurrent, setDateCurrent] = useState();

  return (
    <View>
      <Text>Home</Text>
      <CalendarList
        current={dateCurrent}
        showScrollIndicator={false}
        horizontal={true}
        markedDates={{
          '2020-07-01': { selected: true, marked: true, selectedColor: 'blue' },
          '2020-07-02': { marked: true },
          '2020-07-03': {
            marked: true,
            dotColor: 'red',
            activeOpacity: 0,
            dotColor: 'reda',
          },
          '2020-07-04': { disabled: true, disableTouchEvent: true },
        }}
      />
    </View>
  );
}
