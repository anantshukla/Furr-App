import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';

const MoreSettingsPage = ({ navigation }) => (
  <View style style={theme.BoundingBox}>
    <Background>
      <Header>MoreSettingsPage</Header>

      <Paragraph>
        MoreSettingsPage
      </Paragraph>

    </Background>
    <BottomMenu navigation={navigation} activeLink='MoreSettingsPage'>Bottom Menu</BottomMenu>
  </View>
);

export default memo(MoreSettingsPage);
