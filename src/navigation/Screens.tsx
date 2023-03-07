import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import RegisterScreen from '../screens/NoAuthScreens/RegisterStartScreen';
import { ScreenParams, ScreenWithProps } from './ScreenParams';
import { Route } from '@react-navigation/native';
import RegisterUserScreen from '../screens/NoAuthScreens/RegisterUserDataScreen';

type ScreenType = {
  component: ScreenWithProps<keyof ScreenParams>;
  options?: StackNavigationOptions;
};

type ScreenListElements = Record<string, ScreenType>;

export const screens: ScreenListElements = {
  RegisterScreen: {
    component: RegisterScreen,
  },
  UserDataRegisterScreen: {
    component: RegisterUserScreen,
  },
};

export const InitialScreen = screens.RegisterScreen;

export const StackNavigator = createStackNavigator();
