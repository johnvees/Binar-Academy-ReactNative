import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../helpers/API';
import { Input } from 'react-native-elements'

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        username: 'mor_2314',
        password: '83r5^_',
      };

      const results = await axios.post(`${BASE_URL}/auth/login`, body);

      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity onPress={postLogin}>
        <Text>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Dont have account yet? Register now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
