import React, { memo } from 'react';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import BottomMenu from '../components/BottomMenu';

import Button from '../components/Button';

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
    <BottomMenu navigation={this.props.navigation} activeLink='MainCalenderPage'>Bottom Menu</BottomMenu>
  </Background>
);

export default memo(Dashboard);
