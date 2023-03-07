import React from 'react';
import { Text } from 'react-native';
import { ScreenWithProps } from '../../navigation/ScreenParams';

const RegisterUserScreen: ScreenWithProps<'RegisterUserScreen'> = ({ navigation, route }) => {
  return <Text>Hello world</Text>;
};

export default RegisterUserScreen;
