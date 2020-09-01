import * as Font from 'expo-font';
import { useFonts } from "@use-expo/font";
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import 'react-native-gesture-handler';
import { AppLoading } from 'expo';

const customFonts = {
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
}

const Main = () => {
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
