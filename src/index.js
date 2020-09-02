import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  TrendsPage,
  ClickerPage,
  MoreSettingsPage,
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
    TrendsPage,
    ClickerPage,
    MoreSettingsPage,
    AccountSettingsPage,
    AppSettingsPage,
    AboutUsPage,
    FeedbackPage,
  },
  {
    initialRouteName: 'TrendsPage',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
