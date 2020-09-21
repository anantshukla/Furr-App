import React, { memo } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import Background from '../../components/BackgroundMainApp';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import BottomMenu from '../../components/BottomMenu';
import { theme } from '../../core/theme';
import BackButton from '../../components/BackButtonMainApp';


const FeedbackPage = ({ navigation }) => (
  <Background>
    <BackButton goBack={() => navigation.navigate('PetSelectionScreen')} />
    <Header>Delete Pet Details</Header>
      <Image
        style={styles.petDisplayPicture}
        //source={{ uri: item.petImage }}
        source={{ uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg' }}
      />
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.blockForAllDetails}>
          <View style={styles.individualRowInDetails}>
            <Text style={styles.textStyle}>
              Name
            </Text>

            <Text style={styles.textDetailsOfPet}>
              Doggo 1
            </Text>
          </View>

          <View style={styles.individualRowInDetails}>
            <Text style={styles.textStyle}>
              Sex
            </Text>

            <Text style={styles.textDetailsOfPet}>
              Female
            </Text>
          </View>

          <View style={styles.individualRowInDetails}>
            <Text style={styles.textStyle}>
              Breed
            </Text>

            <Text style={styles.textDetailsOfPet}>
              Samoyed
            </Text>
          </View>

          <View style={styles.individualRowInDetails}>
            <Text style={styles.textStyle}>
              DOB
            </Text>

            <Text style={styles.textDetailsOfPet}>
              09/08/2020
            </Text>
          </View>
        </View>
        <View style={styles.editButtonPosition}>
          <Button style={styles.editButtonStyle} mode="contained" onPress={() => navigation.navigate('Dashboard')}>
            Delete
          </Button>
        </View>
      </ScrollView>
    </Background>
);

const styles = StyleSheet.create({
  scrollViewStyle: {
    //width: Dimensions.get('window').width,
    //display: 'flex',
    //flex: 1,
  },
  petDisplayPicture: {
    paddingTop: 4,
    marginTop: '5%',
    width: 175,
    height: 175,
    borderRadius: 87.5,
    marginBottom: 15,
  },
  blockForAllDetails: {
    paddingTop: '7%',
  },
  individualRowInDetails: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
  },
  textStyle: {
    alignItems: 'flex-start',
    //textAlign: 'left',
    fontSize: 20,
    lineHeight: 55,
    flex: 1,
    fontWeight: 'bold',
  },
  textDetailsOfPet: {
    alignItems: 'flex-start',
    //textAlign: 'left',
    fontSize: 20,
    lineHeight: 55,
    flex: 1,
  },
  editButtonPosition: {
    flex: 1,
    alignItems: 'center',
    right: 25,
    paddingTop: 30,
    paddingBottom: 90,
  },
  editButtonStyle: {
    width: '40%',
  },
});
export default memo(FeedbackPage);
