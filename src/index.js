import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  MainCalenderPage,
  YourFitnessActivity,
  ClickerPage,
  MoreSettingsPage,
  PetSelectionScreen
} from './screens';

import CreateTask from './screens/CalenderPages/screens/CreateTask';

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
    MainCalenderPage,
    CreateTask,
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
    initialRouteName: 'Dashboard',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
