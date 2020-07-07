import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Colors } from '@config';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0.9, y: 1.0 }}
        colors={[Colors.darkTurquoise, Colors.turquoise]}>
        <Text style={styles.ltbOnline}>LTB-Online</Text>
      </LinearGradient>
    </SafeAreaView>
  );
}
