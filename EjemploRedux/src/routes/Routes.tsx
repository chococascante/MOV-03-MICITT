import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Link, Switch} from 'react-router-native';
import UserDetails from '../components/molecules/UserDetails';
import UserList from '../components/organisms/UserList';

const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/details" component={UserDetails} />
        <Route path="/" component={UserList} />
      </Switch>
    </NativeRouter>
  );
};

export default Routes;
