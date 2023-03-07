import React from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import { Container, LogoImage, RegisterContainer, Title } from './styles';
import { Image } from 'react-native';
import ButtonWithBorder from '../../../components/buttons/ButtonWithBorder';

const RegisterScreen: ScreenWithProps<'RegisterScreen'> = ({ navigation, route }) => {
  return (
    <Container>
      <LogoImage source={require('../../../../assets/logo.png')} />
      <Title>Программа{'\n'} поддержки пациентов и врачей</Title>
      <RegisterContainer>
        <Title fontSize={21} paddingBottom={16}>
          Регистрация
        </Title>
        <ButtonWithBorder title="Врач" />
      </RegisterContainer>
    </Container>
  );
};

export default RegisterScreen;
