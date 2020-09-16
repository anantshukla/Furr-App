import React, { memo } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, FlatList } from 'react-native';

import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BackButton from '../components/BackButtonMainApp';

import { MaterialIcons } from '@expo/vector-icons';

const uri = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg';

const DATA = [
  {
    petId: '1',
    petName: 'Doggo1',
    petImage: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg'
  },
  {
    petId: '2',
    petName: 'Doggo2',
    petImage: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg'
  },
  {
    petId: '3',
    petName: 'Doggo3',
    petImage: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg'
  },
  {
    petId: '4',
    petName: 'Doggo4',
    petImage: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg'
  },
];



const PetSelectionScreen = ({ navigation }) => {

  //Render all Pet Profiles
  const renderItem = ({ item }) =>
  {
    return(
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <View style={styles.item}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.petPicture}
              source={{ uri: item.petImage }}
            />
            <Text style={styles.title}>{item.petName}</Text>
          </View>
          <View style={styles.rightSideButtons}>
            <Text style={styles.rightArrow}> > </Text>

            <View style={styles.updateDeleteButton}>
              <TouchableOpacity onPress={() => navigation.navigate('UpdatePetScreen')}>
                <Text style={styles.individualUpdateDeleteButton}>UPDATE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('DeletePetScreen')}>
                <Text style={styles.individualUpdateDeleteButton}>DELETE</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </TouchableOpacity>
    );
  }

  //Main Render Function
  return(
    <Background>
      <BackButton style={styles.backButton} goBack={() => navigation.navigate('Dashboard')} />

      <Header>Select a Pet Profile</Header>

      <View style={styles.item} behavior="padding">
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.petId}
        />
      </View>

      <View style={styles.buttomMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('AddPetScreen')}>
          <Text>
            Add Button
          </Text>
        </TouchableOpacity>
      </View>

    </Background>
  )
}

const styles = StyleSheet.create({
  item: {
    //backgroundColor: '#f9c2ff',
    paddingTop: 7,
    marginVertical: 4,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  petPicture: {
    marginRight: '6%',
    paddingTop: 4,
    width: 90,
    height: 90,
    borderRadius: 48,
  },
  title: {
    fontSize: 25,
  },
  rightSideButtons: {
    flexDirection: 'column',
  },
  rightArrow: {
    fontSize: 25,
    position: 'absolute',
    right: 0,
    top: -35,
    //flexDirectsion: 'column',
    //alignSelf: 'flex-end'
  },
  updateDeleteButton: {
    position: 'absolute',
    fontSize: 20,
    flexDirection: 'row',
    right: 0,
    top: 10,
  },
  individualUpdateDeleteButton: {
    marginLeft: 10,
  },
  buttomMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom:0,
    width: '100%',
    height: '8%',
    left: '50%',
  },
});
export default memo(PetSelectionScreen);
