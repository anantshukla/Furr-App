import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  YourFitnessActivity,
  ClickerPage,
  MoreSettingsPage,
  PetSelectionScreen
} from './screens';

import {
  AccountSettingsPage,
  AppSettingsPage,
  AboutUsPage,
  FeedbackPage,
} from './screens/SettingsPages';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    YourFitnessActivity,
    ClickerPage,
    MoreSettingsPage,
    PetSelectionScreen, //Need to change to sidebar later
    AccountSettingsPage,
    AppSettingsPage,
    AboutUsPage,
    FeedbackPage,
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
