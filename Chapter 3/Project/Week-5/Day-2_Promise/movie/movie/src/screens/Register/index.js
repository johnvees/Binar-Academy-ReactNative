import {
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {moderateScale} from 'react-native-size-matters';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import handsUp from '../../assets/illustration/handsUp.png';

import axios from 'axios';
import {BASE_URL} from '../../helpers/apiAccessTokens';
import {useSelector} from 'react-redux';

let regexPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
let regexEmail = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$');

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const title = useSelector(state => state.register.title);
  const titleDesc = useSelector(state => state.register.titleDesc);
  const buttonText = useSelector(state => state.register.button);

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

      // console.log(password);
      // console.log(email);

      const resultRegexPass = regexPass.test(password);
      const resultRegexEmail = regexEmail.test(email);

      // console.log(resultRegexPass);
      // console.log(resultRegexEmail);

      const results = await axios.post(`${BASE_URL}/users`, body);
      console.log(results);

      if (results.status === 201 || results.status === 200) {
        if (resultRegexPass === true) {
          if (resultRegexEmail === true) {
            navigation.replace('Login');
          } else if (resultRegexEmail === false) {
            Alert.alert('Gagal', 'Format Email Tidak Sesuai');
          }
        } else if (resultRegexPass === false) {
          Alert.alert('Gagal', 'Format Password Tidak Sesuai');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginTop: moderateScale(16)}}>
        <Image
          source={handsUp}
          style={{
            width: moderateScale(100),
            height: moderateScale(100),
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.titleDesc}>{titleDesc}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            marginTop: moderateScale(16),
            backgroundColor: '#FAFAFA',
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={text => {
              setUsername(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={text => {
              setFirstname(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={text => {
              setLastName(text);
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            keyboardType="phone-pad"
            onChangeText={text => {
              setPhone(text);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={postRegister}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
    fontWeight: '700',
  },
  titleDesc: {
    marginBottom: moderateScale(16),
    fontSize: moderateScale(16),
    color: 'black',
    fontWeight: '400',
  },
  inputContainer: {
    justifyContent: 'center',
  },
  textInput: {
    marginBottom: moderateScale(24),
    backgroundColor: '#ECECEC',
    color: 'black',
    fontSize: moderateScale(14),
    paddingStart: moderateScale(16),
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,

    elevation: 4,
  },
  button: {
    marginVertical: moderateScale(8),
    alignSelf: 'center',
    paddingHorizontal: moderateScale(30),
    backgroundColor: '#ff6961',
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: 'white',
    fontWeight: '700',
  },
});
