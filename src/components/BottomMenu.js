import React, { memo } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { theme } from '../core/theme';
import { Button as NBButton, Text as NBText } from 'native-base';
import Svg, { Polyline, Path, Circle } from 'react-native-svg';

const BottomMenu = ({ children, activeLink, navigation }) => (
  <View style={styles.ButtomMenu}>
    {
      activeLink === 'Dashboard' ?
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('Dashboard')}
          disabled
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" height="30" width="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.activeBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Polyline points="5 12 3 12 12 3 21 12 19 12" />
                <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </Svg>
            </View>
            <NBText style={ styles.ActiveImageNavigationIconText }>Home</NBText>
          </View>
        </NBButton>
      :
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('Dashboard')}
        >
        <View style={ styles.InsideBottomButton}>
          <View style={ styles.ImageNavigationIcon }>
            <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.notActiveBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
              <Path stroke="none" d="M0 0h24v24H0z"/>
              <Polyline points="5 12 3 12 12 3 21 12 19 12" />
              <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </Svg>
          </View>
          <NBText style={ styles.NotActiveImageNavigationIconText }>Home</NBText>
        </View>
      </NBButton>
    }

    {
      activeLink === 'YourFitnessActivity'
      ?
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('YourFitnessActivity')}
          disabled
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.activeBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Polyline points="3 17 9 11 13 15 21 7" />
                <Polyline points="14 7 21 7 21 14" />
              </Svg>
            </View>
            <NBText style={styles.ActiveImageNavigationIconText}>Activity</NBText>
          </View>
        </NBButton>
      :
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('YourFitnessActivity')}
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.notActiveBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Polyline points="3 17 9 11 13 15 21 7" />
                <Polyline points="14 7 21 7 21 14" />
              </Svg>
            </View>
            <NBText style={styles.NotActiveImageNavigationIconText}>Activity</NBText>
          </View>
        </NBButton>
    }

    {
      activeLink === 'ClickerPage' ?
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('ClickerPage')}
          disabled
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.activeBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </Svg>
            </View>
            <NBText style={styles.ActiveImageNavigationIconText}>Clicker</NBText>
          </View>
        </NBButton>
      :
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('ClickerPage')}
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.notActiveBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </Svg>
            </View>
            <NBText style={styles.NotActiveImageNavigationIconText}>Clicker</NBText>
          </View>
        </NBButton>
    }

    {
      activeLink === 'MoreSettingsPage' ?
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('MoreSettingsPage')}
          disabled
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.activeBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Circle cx="5" cy="12" r="1" />
                <Circle cx="12" cy="12" r="1" />
                <Circle cx="19" cy="12" r="1" />
              </Svg>
            </View>
            <NBText style={styles.ActiveImageNavigationIconText}>More</NBText>
          </View>
        </NBButton>
      :
        <NBButton
          style={ styles.BottomNavigationButtons }
          onPress={() => navigation.navigate('MoreSettingsPage')}
        >
          <View style={ styles.InsideBottomButton }>
            <View style={ styles.ImageNavigationIcon }>
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke={theme.colors.notActiveBottomTabColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z"/>
                <Circle cx="5" cy="12" r="1" />
                <Circle cx="12" cy="12" r="1" />
                <Circle cx="19" cy="12" r="1" />
              </Svg>
            </View>
            <NBText style={styles.NotActiveImageNavigationIconText}>More</NBText>
          </View>
        </NBButton>
    }

  </View>
);

const styles = StyleSheet.create({
  ButtomMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom:0,
    width: '100%',
    height: '8%',
    backgroundColor: theme.colors.primary,
  },
  BottomNavigationButtons: {
    backgroundColor: theme.colors.primary,
    width: '25%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InsideBottomButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  ImageNavigationIcon: {
    width: '30%',
    height: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActiveImageNavigationIconText: {
    paddingTop: 8,
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.activeBottomTabColor,
  },
  NotActiveImageNavigationIconText: {
    paddingTop: 8,
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.notActiveBottomTabColor,
  }
});

export default memo(BottomMenu);
