import React, { memo } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import Background from '../components/BackgroundMainApp';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';
import { theme } from '../core/theme';
import { MaterialIcons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1',
    icon: 'account-circle',
    iconTagLibrary: 'MaterialIcons',
    page: 'ChangePasswordScreen',
    title: 'Change Password',
  },
  /*
  {
    id: '2',
    icon: 'account-circle',
    iconTagLibrary: 'MaterialIcons',
    page: 'AppSettingsPage',
    title: 'App Settings',
  },
  */
  {
    id: '3',
    icon: 'account-circle',
    iconTagLibrary: 'MaterialIcons',
    page: 'AboutUsPage',
    title: 'About us',
  },
  {
    id: '4',
    icon: 'account-circle',
    iconTagLibrary: 'MaterialIcons',
    page: 'FeedbackPage',
    title: 'Feedback',
  },
];

const MoreSettingsPage = ({ navigation }) => {
  const renderItem = ({ item }) =>
  {
    let IconTagLibrary = item.iconTagLibrary;
    return(
      <TouchableOpacity onPress={() => navigation.navigate(`${item.page}`)}>
        <View style={styles.item}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons style={styles.leftIcon} name={item.icon} size={25} color="black" />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.rightArrow}> > </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return(
    <View style={theme.BoundingBox}>
      <Background>

        <View style={theme.HeaderStyle} behavior="padding">
          <Header>
            MoreSettingsPage
          </Header>
        </View>

        <View style={styles.item} behavior="padding">
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

      </Background>
      <BottomMenu navigation={navigation} activeLink='MoreSettingsPage'>Bottom Menu</BottomMenu>
    </View>
  )
};

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
  leftIcon: {
    fontSize: 25,
    paddingRight: '7%',
    paddingTop: 4,
  },
  title: {
    fontSize: 25,
  },
  rightArrow: {
    fontSize: 25,
    //alignSelf: 'flex-end'
  }
});

export default memo(MoreSettingsPage);
