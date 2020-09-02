import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Background from '../../components/BackgroundMainApp';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import BottomMenu from '../../components/BottomMenu';
import { theme } from '../../core/theme';

const AppSettingsPage = ({ navigation }) => (
  <View style={theme.BoundingBox}>
    <Background>
      <Header>App Settings Page</Header>

      <Paragraph>
        Trends
      </Paragraph>

    </Background>
  </View>
);

export default memo(AppSettingsPage);
