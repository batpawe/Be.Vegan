import React from 'react';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginPanel from './src/Register&Login/LoginPanel';
import Profil from './src/Profil';
import RegisterPanel from './src/Register&Login/RegisterPanel';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

const UserManagerTabNavigator = createBottomTabNavigator({
  Posts: {
    screen: Profil,
    navigationOptions: {
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        return <Icon name="users" size={26}></Icon>;
      },
    },
  },
  Maps: {
    screen: Profil,
    navigationOptions: {
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        return <Icon name="map" size={26}></Icon>;
      },
    },
  },

  Recipies: {
    screen: Profil,
    navigationOptions: {
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        return <Icon name="leaf" size={26}></Icon>;
      },
    },
  },
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
