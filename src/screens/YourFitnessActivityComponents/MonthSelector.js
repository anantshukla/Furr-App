import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Text as NBText } from 'native-base';

const MonthSelector = () => {
  return(
    <View style={styles.secondSelectorSection}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
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
export default memo(MonthSelector);
