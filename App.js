import React, { useEffect } from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import 'react-native-gesture-handler';

const Main = () => {
  useEffect(() => {
    LoadFont = async() => {
      await Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }
  });

  return(
    <Provider theme={theme}>
      <App />
    </Provider>
  )
};

export default Main;
