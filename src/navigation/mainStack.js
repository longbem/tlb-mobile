import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// stask
import BottomTab from './bottomTab';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
