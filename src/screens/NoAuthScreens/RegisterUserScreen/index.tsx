import React, { useState } from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import * as Yup from 'yup';
import { Container } from '../../../styles/global';
import NavigationHeader from '../../../components/NavigationHeader';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, TextInput, View } from 'react-native';
import TextInputForEdit, { StatusType } from '../../../components/TextInputForEdit';
import { FieldContainer, FieldText } from './styles';

type ValueWithKey = {
  key?: string;
  name: string;
  value: string;
};

interface IFormValues {
  name: string;
  lastname: string;
  middleName: string;
  phoneNumber: string;
  email: string;
  city: string;
  document: any;
  specialization: string;
}

const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastname: Yup.string().required(),
  middleName: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  email: Yup.string().required(),
  city: Yup.string().required(),
  document: Yup.string().required(),
  specialization: Yup.string().required(),
});

const RegisterUserScreen: ScreenWithProps<'RegisterUserScreen'> = ({ navigation, route }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<IFormValues>({
    defaultValues: {
      city: '',
      document: '',
      email: '',
      lastname: '',
      middleName: '',
      name: '',
      phoneNumber: '',
      specialization: '',
    },
    resolver: yupResolver(formSchema),
    mode: 'all',
    criteriaMode: 'all',
    shouldUnregister: false,
  });

  const selectCurrentFieldStatus = (isTouched: boolean, error: FieldError | undefined): StatusType => {
    if (isTouched && error) {
      return 'danger';
    }
    if (isTouched && !error) {
      return 'success';
    }
    return 'primary';
  };

  return (
    <Container>
      <NavigationHeader withCrossIcon title="Регистрация в кабинете врача" />
      <ContainerWithLogo>
        <FieldContainer>
          <FieldText>Фамилия</FieldText>
          <Controller
            control={control}
            name="lastname"
            key="lastname"
            render={({ field, fieldState: { isTouched, error } }) => (
              <TextInputForEdit
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={field.onChange}
                placeholder="Фамилия"
                {...field}
              />
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldText>Имя</FieldText>
          <Controller
            control={control}
            name="name"
            key="name"
            render={({ field, fieldState: { isTouched, error } }) => (
              <TextInputForEdit
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={field.onChange}
                placeholder="Имя"
                {...field}
              />
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldText>Отчество</FieldText>
          <Controller
            control={control}
            name="middleName"
            key="middleName"
            render={({ field, fieldState: { isTouched, error } }) => (
              <TextInputForEdit
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={field.onChange}
                placeholder="Отчество"
                {...field}
              />
            )}
          />
        </FieldContainer>
      </ContainerWithLogo>
    </Container>
  );
};

export default RegisterUserScreen;
