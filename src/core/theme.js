import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    surface: 'white',
    primary: '#600EE6',
    secondary: '#414757',
    error: '#f13a59',
    activeBottomTabColor: '#fdfdfd',
    notActiveBottomTabColor: '#9e9e9e',
  },
  BoundingBox: {
    flex: 1,
    width: '100%',
  },
  HeaderStyle: {
    alignItems: 'center',
  },
  ContentStyle: {
    paddingTop: 5,
    flex: 1,
    alignSelf: 'stretch',
  },
};
