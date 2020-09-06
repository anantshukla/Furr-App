import React, { memo } from 'react';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const PetSelectionScreen = ({ navigation }) => (
  <Background>
    <Logo />
  </Background>
);

export default memo(PetSelectionScreen);
