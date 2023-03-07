import React from 'react';
import { Text } from 'react-native';
import { ScreenWithProps } from '../../navigation/ScreenParams';

const RegisterScreen: ScreenWithProps<'RegisterScreen'> = ({ navigation, route }) => {
  return <Text>Hello world</Text>;
};

export default RegisterScreen;
