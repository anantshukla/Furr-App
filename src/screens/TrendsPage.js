import React, { memo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button as NBButton, Text as NBText } from 'native-base';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';

const TrendsPage = ({ navigation }) => (
  <View style={theme.BoundingBox}>
    <Background>
      <Header>Your Fitness Activity</Header>

      <View style={styles.firstSelectorSection}>
        <Paragraph>
          Day
        </Paragraph>
        <Paragraph>
          Week
        </Paragraph>
        <Paragraph>
          Month
        </Paragraph>
      </View>

      <View style={styles.secondSelectorSection}>
        <ScrollView
        horizontal={true}>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              JAN
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              FEB
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              MAR
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              APR
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              MAY
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              JUN
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              JUL
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              AUG
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              SEP
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              OCT
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              NOV
            </NBText>
          </View>
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              DEC
            </NBText>
          </View>
        </ScrollView>
      </View>

      <View style={styles.thirdSelectorSection}>
        <View style={styles.thirdSectionIndividualBox}>
          <NBText>
            Steps
          </NBText>
        </View>
        <View style={styles.thirdSectionIndividualBox}>
          <NBText>
            Calories
          </NBText>
        </View>
        <View style={styles.thirdSectionIndividualBox}>
          <NBText>
            Distance
          </NBText>
        </View>
      </View>

    </Background>
    <BottomMenu navigation={navigation} activeLink='TrendsPage'>Bottom Menu</BottomMenu>
  </View>
);

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
});

export default memo(TrendsPage);
;
