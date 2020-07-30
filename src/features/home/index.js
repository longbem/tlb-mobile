import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Colors } from '@config';
import moment from 'moment';
import { LTB_ONLINE, HTTPS_STATUS } from '@constant';
// import { Button } from '@components';

export default function Home() {
  const day = moment().format('DD');
  const month = moment().format('MM');
  const year = moment().format('YYYY');
  const [user, setUser] = useState({
    image: '',
    fullName: '',
    code: '',
  });

  const getUser = () => {
    const response = {
      data: DUMMY_USER,
      status: 200,
    };

    if (response.status === HTTPS_STATUS.OK) {
      const _user = response.data;
      setUser({
        image: _user.image,
        fullName: _user.full_name,
        code: _user.code,
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.ltbOnline}>{LTB_ONLINE}</Text>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          colors={[Colors.darkTurquoise, Colors.turquoise]}
          style={styles.containerUser}>
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.boxImage}
          />
          <View>
            <Text style={styles.name}>{user.fullName}</Text>
            <Text style={styles.code}>{user.code}</Text>
          </View>
        </LinearGradient>
        <View style={styles.box}>
          <Text
            style={
              styles.date
            }>{`ngày ${day} tháng ${month} năm ${year}`}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const DUMMY_USER = {
  image: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
  full_name: 'Hoang Trung Long',
  code: 'HS20A1021',
};
