import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Profil extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 40, color: 'white'}}>Po zalogowaniu</Text>
        <TouchableOpacity onPress={this.logout}>
          <Text>Wyloguj</Text>
        </TouchableOpacity>
      </View>
    );
  }

  logout = () => {
    alert('wyloguj');
    AsyncStorage.removeItem('@user');
    this.props.navigation.navigate('Login');
  };
}

export default Profil;
