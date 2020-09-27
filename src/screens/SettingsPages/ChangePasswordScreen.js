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

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPasswordField, setOldPasswordField] = React.useState('');
  const [newPasswordField1, setNewPasswordField1] = React.useState('');
  const [newPasswordField2, setNewPasswordField2] = React.useState('');

  return(
    <View style={theme.BoundingBox}>
      <Background>
        <BackButton goBack={() => navigation.navigate('MoreSettingsPage')} />
        <Header>Change Password</Header>
          <Paragraph>
            You cannot change your password if you've logged in using Social Sign in.
          </Paragraph>
          <ScrollView style={styles.scrollContiner}>
          <View style={styles.mainContiner}>

            <Input
              label = "Old Password"
              returnKeyType="next"
              value = {oldPasswordField}
              mode = {'outlined'}
              numberOfLines = {1}
              onChangeText = {oldPasswordField => setOldPasswordField(oldPasswordField)}
              style = {styles.feedbackInput}
              secureTextEntry
            />

            <Input
              label = "New Password"
              returnKeyType="next"
              value = {newPasswordField1}
              mode = {'outlined'}
              numberOfLines = {1}
              onChangeText = {newPasswordField1 => setNewPasswordField1(newPasswordField1)}
              style = {styles.feedbackInput}
              secureTextEntry
            />

            <Input
              label = "Repeat New Password"
              returnKeyType="done"
              value = {newPasswordField2}
              mode = {'outlined'}
              numberOfLines = {1}
              onChangeText = {newPasswordField2 => setNewPasswordField2(newPasswordField2)}
              style = {styles.feedbackInput}
              secureTextEntry
            />

            <View style={styles.feedbackButtonPosition}>
              <Button style={styles.feedbackButtonStyle} mode="contained" onPress={() => navigation.navigate('Dashboard')}>
                Change Password
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

export default memo(ChangePasswordScreen);
