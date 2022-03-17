import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {moderateScale} from 'react-native-size-matters';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import axios from 'axios';
import {BASE_URL} from '../../helpers/apiAccessTokens';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        username: username,
        password: password,
      };

      const results = await axios.post(`${BASE_URL}/auth/login`, body);
      console.log(results);

      if (results.status === 201 || results.status === 200) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.titleDesc}>Hey! You've been missed.</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Username"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password Here"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={postLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.registerText}>Not a Member? Register Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: moderateScale(16),
  },
  titleContainer: {
    marginTop: moderateScale(24),
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: moderateScale(8),
    fontSize: moderateScale(20),
    color: 'black',
    fontWeight: '900',
  },
  titleDesc: {
    marginBottom: moderateScale(32),
    fontSize: moderateScale(16),
    color: 'black',
    fontWeight: '500',
  },
  inputContainer: {
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: moderateScale(16),
    backgroundColor: '#ECECEC',
    color: 'black',
    fontSize: moderateScale(16),
    paddingStart: moderateScale(16),
    borderRadius: moderateScale(10),
  },
  button: {
    marginTop: moderateScale(8),
    alignSelf: 'center',
    paddingHorizontal: moderateScale(30),
    backgroundColor: '#ff6961',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: 'white',
    fontWeight: '900',
  },
  register: {
    alignContent: 'flex-end',
    alignSelf: 'center',
  },
  registerText: {
    color: '#779ECB',
    fontSize: 12,
    fontWeight: '900',
  },
});
