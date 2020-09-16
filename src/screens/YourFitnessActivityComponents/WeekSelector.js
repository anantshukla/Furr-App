import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Text as NBText } from 'native-base';

const WeekSelector = () => {
  return(
    <View style={styles.secondSelectorSection}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() => setSecondSelector('JAN')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              Mon
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('FEB')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              Tue
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('MAR')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              Wed
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('APR')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              Thu
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('MAY')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              Fri
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('JUN')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              Sat
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('THIS WEEK')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              THIS WEEK
            </NBText>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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
});
export default memo(WeekSelector);
