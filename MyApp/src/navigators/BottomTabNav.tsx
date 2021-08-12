import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Componente1 from '../components/Componente1';
import Componente2 from '../components/Componente2';

const BottomTabNav = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Componente1" component={Componente1} />
        <Screen name="Componente2" component={Componente2} />
      </Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
