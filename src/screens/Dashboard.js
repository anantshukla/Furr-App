import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';

const Dashboard = ({ navigation }) => (
    <View style style={styles.BoundingBox}>
      <Background>
        <Header>3 Circles</Header>
      </Background>
      <BottomMenu navigation={navigation} activeLink='Dashboard'>Bottom Menu</BottomMenu>
    </View>
);

const styles = StyleSheet.create({
  BoundingBox: {
    flex: 1,
  },
});

export default memo(Dashboard);
