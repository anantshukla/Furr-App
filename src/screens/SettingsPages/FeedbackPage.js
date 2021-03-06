import React, { memo, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Background from '../../components/BackgroundMainApp';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import BottomMenu from '../../components/BottomMenu';
import BackButton from '../../components/BackButtonMainApp';
import { theme } from '../../core/theme';
import { TextInput as Input } from 'react-native-paper';

const FeedbackPage = ({ navigation }) => {
  const [feedbackField1, setFeedbackField1] = React.useState('');
  const [feedbackField2, setFeedbackField2] = React.useState('');
  const [feedbackField3, setFeedbackField3] = React.useState('');
  return(
    <View style={theme.BoundingBox}>
      <Background>
        <BackButton goBack={() => navigation.navigate('MoreSettingsPage')} />
        <Header>Feedback Page</Header>
          <Paragraph>
            Please provide us your feedback. We will try to work on it ASAP!
          </Paragraph>
          <ScrollView style={styles.scrollContiner}>
          <View style={styles.mainContiner}>

            <Input
              label = "Any features that could be added to the app"
              value = {feedbackField1}
              mode = {'outlined'}
              multiline = {true}
              numberOfLines = {5}
              onChangeText = {feedbackField1 => setFeedbackField1(feedbackField1)}
              style = {styles.feedbackInput}
            />

            <Input
              label = "Major bugs that you are facing"
              value = {feedbackField1}
              mode = {'outlined'}
              multiline = {true}
              numberOfLines = {5}
              onChangeText = {feedbackField1 => setFeedbackField1(feedbackField1)}
              style = {styles.feedbackInput}
            />

            <Input
              label = "Device Make and Model"
              value = {feedbackField3}
              mode = {'outlined'}
              multiline = {true}
              numberOfLines = {2}
              onChangeText = {feedbackField3 => setFeedbackField1(feedbackField3)}
              style = {styles.feedbackInput}
            />
            <View style={styles.feedbackButtonPosition}>
              <Button style={styles.feedbackButtonStyle} mode="contained" onPress={() => navigation.navigate('Dashboard')}>
                Send Feedback
              </Button>
            </View>
          </View>
        </ScrollView>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContiner: {
    //flex:1,
    width: '100%',
  },
  mainContiner: {
    alignItems: 'center',
  },
  feedbackInput: {
    width: '90%',
    paddingTop: 25,
  },
  feedbackButtonPosition: {
    paddingTop: 25,
    paddingBottom: 50,
    alignItems: 'center',
  },
  feedbackButtonStyle: {
    width: '70%',
  }
})

export default memo(FeedbackPage);
