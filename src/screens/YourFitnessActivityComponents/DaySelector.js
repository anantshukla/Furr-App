import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Text as NBText } from 'native-base';

const DaySelector = () => {
  return(
    <View style={styles.secondSelectorSection}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

        <TouchableOpacity onPress={() => setSecondSelector('04 SEP')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              04 SEP
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('05 SEP')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              05 SEP
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('06 SEP')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              06 SEP
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('07 SEP')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              07 SEP
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('08 SEP')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              08 SEP
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('09 SEP')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              09 SEP
            </NBText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSecondSelector('TODAY')} >
          <View style={styles.secondSectionIndividualMonthBox}>
            <NBText>
              TODAY
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
export default memo(DaySelector);
