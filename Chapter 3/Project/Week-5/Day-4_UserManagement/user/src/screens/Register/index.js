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

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: phone,
      };

      const results = await axios.put(`${BASE_URL}/users/7`, body, {
        validateStatus: status => status < 501,
      });
      navigation.navigate('Login');

      console.log(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholder="Username"
        onChangeText={text => {
          setUsername(text);
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <TextInput
        placeholder="First Name"
        onChangeText={text => {
          setFirstname(text);
        }}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={text => {
          setLastName(text);
        }}
      />
      <TextInput
        placeholder="Phone"
        keyboardType="phone-pad"
        onChangeText={text => {
          setPhone(text);
        }}
      />

      <TouchableOpacity onPress={postRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
