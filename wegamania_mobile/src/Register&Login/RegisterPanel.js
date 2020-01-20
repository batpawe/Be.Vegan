import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import background from '../../images/Panelrejestracji.png';
import Logo from '../../images/panelloglogo.png';
const {width: WIDTH} = Dimensions.get('window');

class RegisterPanel extends Component {
  state = {login: '', haslo1: '', haslo2: '', email: ''};
  render() {
    return (
      <ImageBackground source={background} style={styles.bgContainer}>
        <KeyboardAvoidingView>
          <View style={{flex: 1, marginTop: 35, alignItems: 'center'}}>
            <View>
              <Image source={Logo} style={styles.logoContainer}></Image>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                autoCompleteType="username"
                style={styles.textInput}
                placeholder="Login"
                onChangeText={username => this.setState({login: username})}
                placeholderTextColor="#e8e7e6"
                underlineColorAndroid="transparent"></TextInput>
            </View>
            <View>
              <TextInput
                autoCompleteType="email"
                style={styles.textInput}
                placeholder="E-Mail"
                onChangeText={mail => this.setState({email: mail})}
                placeholderTextColor="#e8e7e6"
                underlineColorAndroid="transparent"></TextInput>
            </View>
            <View>
              <TextInput
                autoCompleteType="password"
                style={styles.textInput}
                placeholder="Haslo"
                onChangeText={password1 => this.setState({haslo1: password1})}
                placeholderTextColor="#e8e7e6"
                underlineColorAndroid="transparent"
                secureTextEntry={true}></TextInput>
            </View>
            <View>
              <TextInput
                autoCompleteType="password"
                style={styles.textInput}
                placeholder="Powtórz Haslo"
                onChangeText={password2 => this.setState({haslo2: password2})}
                placeholderTextColor="#e8e7e6"
                underlineColorAndroid="transparent"
                secureTextEntry={true}></TextInput>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: WIDTH - 185,
                  height: 33,
                  backgroundColor: '#d1d1d199',
                  borderRadius: 30,
                  marginTop: 10,
                }}
                onPress={this.register}>
                <Text style={{color: '#e8e7e6', fontSize: 18}}>
                  Zarejestruj się
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: '#e8e7e6', marginTop: 5}}>
                Masz już konto?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{fontSize: 18, color: '#e8e7e6'}}>
                  Zaloguj się
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
  register = () => {
    if (this.state.login == '') {
      alert('Wybierz inny login');
    } else {
      if (this.state.email == '') {
        alert('E-mail nie jest poprawny');
      } else {
        if (
          this.state.haslo1 === this.state.haslo2 &&
          this.state.haslo1 != ''
        ) {
          this.props.navigation.navigate('Login');
        } else {
          alert('Hasła się różnią');
        }
      }
    }
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
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: WIDTH - 105,
    padding: 8,
    marginBottom: 12,
    alignSelf: 'stretch',
    color: '#e8e7e6',
    backgroundColor: '#ebebeb55',
    fontSize: 20,
    marginHorizontal: 10,
    borderRadius: 45,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH - 185,
    height: 33,
    backgroundColor: '#d1d1d199',
    borderRadius: 30,
    marginTop: 15,
  },
  logoContainer: {
    margin: 25,
    position: 'relative',
    resizeMode: 'cover',
    width: 550,
    height: 125,
  },
});

export default RegisterPanel;
