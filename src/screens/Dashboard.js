import React, { memo } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';


const screenWidth = Dimensions.get("window").width;
//packages
import {
  ProgressChart,
} from 'react-native-chart-kit';

const Dashboard = ({ navigation }) => {
  const data = {
    labels: ["Steps", "Distance", "Time"],
    data: [0.4, 0.4, 0.4]
  };
  return(
    <View style={theme.BoundingBox}>
      <Background>
        <TouchableOpacity style={{position: 'absolute', left:20, marginTop:32}} onPress={() => navigation.navigate('PetSelectionScreen')}>
          <Image source={require('./../assets/HamburgerMenuButton.png')}/>
        </TouchableOpacity>

        <Header>3 Circles</Header>
        <ProgressChart
          style={styles.progressCircleChart}
          data={data}
          width={screenWidth-25}
          height={220}
          strokeWidth={16}
          radius={32}
          hideLegend={false}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 255) => `rgba(173, 128, 255, ${opacity})`,
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: "#22a726",
            },
            propsForLabels: {
              fill: "#000000",
            },
          }}
        />
        <Header>Calendar</Header>
        <Paragraph>
          Place Calendar here
        </Paragraph>
        <Header>Add Activity</Header>
        <Header>Set Target</Header>
        <Header>Update Weight</Header>

      </Background>
      <BottomMenu navigation={navigation} activeLink='Dashboard'>Bottom Menu</BottomMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  progressCircleChart: {
    borderRadius: 20,
  },
});

export default memo(Dashboard);
