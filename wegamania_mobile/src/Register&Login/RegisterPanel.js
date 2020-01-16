import React, {Component} from 'react';
import {View, Text} from 'react-native';

class RegisterPanel extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 40, color: 'white'}}>Panel Rejestracji</Text>
      </View>
    );
  }
}

export default RegisterPanel;
