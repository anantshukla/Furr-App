import React, { memo, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { Button as NBButton, Text as NBText } from 'native-base';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';
import DaySelector from './YourFitnessActivityComponents/DaySelector';
import WeekSelector from './YourFitnessActivityComponents/WeekSelector';
import MonthSelector from './YourFitnessActivityComponents/MonthSelector';

//package
import {
  LineChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const YourFitnessActivity = ({ navigation }) => {
  const [firstSelector, setFirstSelector] = useState('Day');
  const [secondSelectorDay, setSecondSelectorDay] = useState('TODAY');
  const [secondSelectorWeek, setSecondSelectorWeek] = useState('JAN');
  const [secondSelectorMonth, setSecondSelectorMonth] = useState('JAN');
  const [thirdSelector, setThirdSelector] = useState('Time');

  const renderSecondSection = () => {
    //console.log(firstSelector);

    if(firstSelector ==='Day') {
      return(
        <DaySelector />
      )
    }

    else if(firstSelector === 'Week') {
      return (
        <WeekSelector />
      )
    }

    else if(firstSelector ==='Month') {
      return(
        <MonthSelector />
      )
    }

    else {
      console.log("err at fitness activity, renderSecondSection")
    }
  }

  return (
    <View style={theme.BoundingBox}>
      <Background>
        <TouchableOpacity style={{position: 'absolute', left:20, marginTop:32}} onPress={() => navigation.navigate('PetSelectionScreen')}>
          <Image source={require('./../assets/HamburgerMenuButton.png')}/>
        </TouchableOpacity>

        <Header>Your Fitness Activity</Header>

        <View style={styles.firstSelectorSection}>
          <TouchableOpacity style={styles.firstSectionIndividualBox} onPress={() => setFirstSelector('Day')} >
            <Paragraph>
              Day
            </Paragraph>
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstSectionIndividualBox} onPress={() => setFirstSelector('Week')} >
            <Paragraph>
              Week
            </Paragraph>
          </TouchableOpacity>

          <TouchableOpacity style={styles.firstSectionIndividualBox} onPress={() => setFirstSelector('Month')} >
            <Paragraph>
              Month
            </Paragraph>
          </TouchableOpacity>
        </View>

        {
          renderSecondSection()
        }

        <View style={styles.thirdSelectorSection}>
          <TouchableOpacity style={styles.thirdSectionIndividualBox} onPress={() => setThirdSelector('Time')} >
            <NBText>
              Time
            </NBText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.thirdSectionIndividualBox} onPress={() => setThirdSelector('Calories')} >
            <NBText>
              Calories
            </NBText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.thirdSectionIndividualBox} onPress={() => setThirdSelector('Distance')} >
            <NBText>
              Distance
            </NBText>
          </TouchableOpacity>

        </View>

        <View style={styles.fourthGraphSection}>
          <View>
            <NBText style={styles.fourthGraphHeading}>
              DISTANCE (KM)
            </NBText>
          </View>

          <View style={styles.fourthGraphImage}>
            <LineChart
              data={{
                labels: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec'
                ],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>

      </Background>
      <BottomMenu navigation={navigation} activeLink='YourFitnessActivity'>Bottom Menu</BottomMenu>
    </View>
  );
}

const styles = StyleSheet.create({
  firstSelectorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '8%',
    //backgroundColor: theme.colors.primary,
  },
  firstSectionIndividualBox: {
    width: '33%',
  },
  secondSelectorSection: {
    backgroundColor: '#BE90D4',
    flexDirection: 'row',
    paddingLeft: 5,
    height: 70,
    width:'110%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondSectionIndividualMonthBox: {
    backgroundColor: '#ededed',
    height: 50,
    width: 105,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 5
  },
  thirdSelectorSection: {
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    width: '105%',
    height: '8%',
    //backgroundColor: theme.colors.primary,
  },
  thirdSectionIndividualBox: {
    backgroundColor: '#ededed',
    height: 70,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 5
  },
  fourthGraphSection: {
    paddingTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
  },
  fourthGraphImage: {
    //paddingTop: '20%',
    flex: 1,
  }
});

export default memo(YourFitnessActivity);
