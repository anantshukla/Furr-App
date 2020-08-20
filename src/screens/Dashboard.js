import React, { memo } from 'react';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const Dashboard = ({ navigation }) => (
  <Background>
    <Header>Dashboard</Header>
  </Background>
);

export default memo(Dashboard);
