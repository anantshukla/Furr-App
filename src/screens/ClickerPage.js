import React, { memo, useEffect, useState, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';
import { Audio } from 'expo-av';

class ClickerPage extends Component {
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: false,
      staysActiveInBackground:true,
      playsThroughEarpieceAndroid: false,
    });
    this.sound = new Audio.Sound();

    const status = {
      shouldPlay: false
    };
    this.sound.loadAsync(require('../assets/clicker.mp3'), status, false);
  }

  RingClicker() {
    try{
      this.sound.playAsync();
      this.sound.setPositionAsync(0)
      console.log("click")
    }
    catch(error) {
      console.log("Error: ", error)
      //await sound.unloadAsync();
    }
  }

  render() {
    return(
      <View style={theme.BoundingBox}>
        <Background>
          <Header>ClickerPage</Header>

          <Paragraph>
            Click Clack
          </Paragraph>

          <Button mode="outlined" onPress={this.RingClicker.bind(this)} >
            Click
          </Button>

        </Background>
        <BottomMenu navigation={this.props.navigation} activeLink='ClickerPage'>Bottom Menu</BottomMenu>
      </View>
    )
  }
};

export default memo(ClickerPage);
