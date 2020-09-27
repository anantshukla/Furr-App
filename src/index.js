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
  ChangePasswordScreen,
  AppSettingsPage,
  AboutUsPage,
  FeedbackPage,
} from './screens/SettingsPages';

import {
  UpdatePetScreen,
  DeletePetScreen,
  AddPetScreen,
} from './screens/PetSelectorSubScreens';

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
    ChangePasswordScreen,
    AppSettingsPage,
    AboutUsPage,
    FeedbackPage,
    UpdatePetScreen,
    DeletePetScreen,
    AddPetScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
