import React, { memo, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Button as NBButton, Text as NBText } from 'native-base';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';
import {
  LineChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const YourFitnessActivity = ({ navigation }) => {
  const [firstSelector, setFirstSelector] = useState('Day');
  const [secondSelector, setSecondSelector] = useState('JAN');
  const [thirdSelector, setThirdSelector] = useState('Time');

  return (
    <View style={theme.BoundingBox}>
      <Background>
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

        <View style={styles.secondSelectorSection}>
          <ScrollView
          horizontal={true}>
            <TouchableOpacity onPress={() => setSecondSelector('JAN')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  JAN
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('FEB')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  FEB
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('MAR')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  MAR
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('APR')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  APR
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('MAY')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  MAY
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('JUN')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  JUN
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('JUL')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  JUL
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('AUG')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  AUG
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('SEP')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  SEP
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('OCT')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  OCT
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('NOV')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  NOV
                </NBText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSecondSelector('DEC')} >
              <View style={styles.secondSectionIndividualMonthBox}>
                <NBText>
                  DEC
                </NBText>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </View>

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
    justifyContent: 'center',
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
