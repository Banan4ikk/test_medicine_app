import React from 'react';
import { Text, View } from 'react-native';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container } from '../../../styles/global';
import NavigationHeader from '../../../components/NavigationHeader';
import ContainerWithLogo from '../../../components/ContainerWithLogo';

const RegisterUserScreen: ScreenWithProps<'RegisterUserScreen'> = ({ navigation, route }) => {
  return (
    <Container>
      <NavigationHeader withCrossIcon title="Регистрация в кабинете врача" />
      <ContainerWithLogo />
    </Container>
  );
};

export default RegisterUserScreen;
