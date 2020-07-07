import React from 'react';
import { Text, SafeAreaView, ScrollView, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Colors } from '@config';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.ltbOnline}>LTB-Online</Text>
      <ScrollView style={{ backgroundColor: '#FFFF' }}>
        <LinearGradient
          colors={[Colors.darkTurquoise, Colors.turquoise]}
          style={styles.containerUser}>
          <Image
            source={{
              uri:
                'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
            }}
            style={styles.boxImage}
          />
          <View>
            <Text style={styles.name}>Hoang Trung Long</Text>
            <Text style={styles.code}>HS20A1021</Text>
          </View>
        </LinearGradient>
        <View style={styles.box}>
          <Text style={styles.date}>Thứ 2 ngày 12 năm 2020</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
