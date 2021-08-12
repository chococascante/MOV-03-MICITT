import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserList from '../components/organisms/UserList';
import UserDetails from '../components/molecules/UserDetails';

const MyBottomTabs = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen name="UserList" component={UserList} />
      <Screen name="UserDetails" component={UserDetails} />
    </Navigator>
  );
};

export default MyBottomTabs;
