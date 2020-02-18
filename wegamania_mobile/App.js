import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginPanel from './src/Register&Login/LoginPanel';
import Profil from './src/Profil';
import RegisterPanel from './src/Register&Login/RegisterPanel';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const UserManagerTabNavigator = createBottomTabNavigator({
  Posts: {screen: Profil},
  Maps: {screen: Profil},
  Recipies: {screen: Profil},
});

const UserManagerDrawerNavigator = createDrawerNavigator({
  Home: UserManagerTabNavigator,
});

const LoginStackNavigator = createStackNavigator(
  {
    Login: {screen: LoginPanel},
    //Profil: {screen: Profil},
    Register: {screen: RegisterPanel},
  },
  {
    headerMode: 'none',
  },
);

const appNavigator = createStackNavigator(
  {
    Login: LoginStackNavigator,
    UserPanel: UserManagerDrawerNavigator,
  },
  {
    headerMode: 'none',
  },
);

// const appNavigator = createStackNavigator(
//   {
//     Login: {screen: LoginPanel},
//     //Profil: {screen: Profil},
//     Register: {screen: RegisterPanel},
//   },
//   {
//     headerMode: 'none',
//   },
// );
//dodac appnavigatora calego (chyba stacka)

export default createAppContainer(appNavigator);
