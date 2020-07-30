import React from 'react';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  image: string;
}

// export default function Button
