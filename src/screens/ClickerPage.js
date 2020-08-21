import React, { memo, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';
import Slider from '@react-native-community/slider';


const RingClicker = () => {
  console.log("hi")
}

const ClickerPage = ({ navigation }) => {

  return(
    <View style style={theme.BoundingBox}>
      <Background>
        <Header>ClickerPage</Header>

        <Paragraph>
          Click Clack
        </Paragraph>

        <Button mode="outlined" onPress={() => RingClicker()}>
          Click
        </Button>

        <Paragraph>
          Slider
        </Paragraph>

        <Slider
          //value={volume}
          //onValueChange={sliderChange}
        />

      </Background>
      <BottomMenu navigation={navigation} activeLink='ClickerPage'>Bottom Menu</BottomMenu>
    </View>
  )
};

export default memo(ClickerPage);
