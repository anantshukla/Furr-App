import * as Font from 'expo-font';
import { Platform } from 'react-native';
import { useFonts } from "@use-expo/font";
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import * as Permissions from 'expo-permissions';


const customFonts = {
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
}

const Main = () => {
  useEffect(() => {
    (async () => await _askForCalendarPermissions())();
    (async () => await _askForReminderPermissions())();
  });

  const _askForCalendarPermissions = async () => {
    await Permissions.askAsync(Permissions.CALENDAR);
  };

  const _askForReminderPermissions = async () => {
    if (Platform.OS === 'android') {
      return true;
    }

    await Permissions.askAsync(Permissions.REMINDERS);
  };

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
        return <AppLoading />;
    }

  return(
    <Provider theme={theme}>
      <App />
    </Provider>
  )
};

export default Main;
