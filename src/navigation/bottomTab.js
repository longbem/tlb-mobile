import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import screen
import HomeScreen from '@features/home';
import NotifiScreen from '@features/notifi';
import AccountScreen from '@features/account';

const BottomTab = createBottomTabNavigator();

export default function HomeBottom() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="home" component={HomeScreen} />
      <BottomTab.Screen name="notifi" component={NotifiScreen} />
      <BottomTab.Screen name="account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
}
