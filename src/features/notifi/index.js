import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 63,
    height: 34,
  },
  login: {
    color: 'rgba(239,238,238,1)',
    fontSize: 29,
    opacity: 0.87,
  },
});
