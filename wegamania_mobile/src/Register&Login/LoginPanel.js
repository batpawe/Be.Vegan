import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import background from '../../images/loginPanelBackgroud.png';
import Axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
class LoginPanel extends Component {
  state = {
    login: '',
    haslo: '',
    token: '',
  };

  componentDidMount() {
    this._loadInitialState();
  }

  _loadInitialState = async () => {
    try {
      const value = await AsyncStorage.getItem('@user');
      if (value != null) {
        this.props.navigation.navigate('UserPanel');
      }
    } catch (e) {}
  };

  render() {
    return (
      <ImageBackground source={background} style={styles.bgContainer}>
        <KeyboardAvoidingView behavior="padding">
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 100,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Login"
              placeholderTextColor="#e8e7e6"
              onChangeText={username => this.setState({login: username})}
              underlineColorAndroid="transparent"></TextInput>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Hasło"
              placeholderTextColor="#e8e7e6"
              onChangeText={password => this.setState({haslo: password})}
              underlineColorAndroid="transparent"
              secureTextEntry={true}></TextInput>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.loginButton} onPress={this.Login}>
              <Text style={styles.textButton}>Zaloguj</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 18, color: '#e8e7e6'}}>
            Nie masz jeszcze konta?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{fontSize: 18, color: '#e8e7e6'}}>
              Zarejestruj się
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  Login = async () => {
    const fetchData = async () => {
      console.log(this.state.login);
      console.log(this.state.haslo);
      const result2 = await Axios.get('http://158.75.40.61:8000/users');
      console.log(result2);
      const result = await Axios.post(
        'http://158.75.40.61:8000/api-token-auth/',
        {
          username: this.state.login,
          password: this.state.haslo,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        },
      );
      return result.data;
    };
    await fetchData()
      .then(res => {
        if (res.token) {
          this.setState({token: res.token});
          this.storeData();
          this.props.navigation.navigate('UserPanel');
        } else {
          alert('Bledny login lub haslo!');
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  // Login = async () => {
  //   if (this.state.login == 'sebek' && this.state.haslo == '123frytki') {
  //     this.storeData();
  //     this.props.navigation.navigate('UserPanel');
  //   } else {
  //     alert('Błędny login lub hasło!');
  //   }
  // };

  storeData = async () => {
    try {
      AsyncStorage.removeItem('@user');
      AsyncStorage.removeItem('@token');
      await AsyncStorage.setItem('@user', this.state.login);
      await AsyncStorage.setItem('@token', this.state.token);
    } catch (e) {}
  };
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    textAlign: 'center',
    width: WIDTH - 75,
    padding: 12,
    marginBottom: 12,
    alignSelf: 'stretch',
    color: '#e8e7e6',
    backgroundColor: '#ebebeb55',
    borderRadius: 45,
    fontSize: 20,
    marginHorizontal: 10,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH - 155,
    height: 33,
    backgroundColor: '#d1d1d199',
    borderRadius: 30,
    marginTop: 15,
  },
  textButton: {
    fontSize: 18,
    color: '#e8e7e6',
  },
});

export default LoginPanel;
