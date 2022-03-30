import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setNama, setAge} from './redux/action';

const Profile = () => {
  const [myName, setMyName] = useState('');
  const namaLengkap = useSelector(state => state.profile.name);
  const age = useSelector(state => state.profile.age);
  const dataStore = useSelector(state => state);

  console.log(dataStore);

  const dispatch = useDispatch();

  // const handleName = () => {
  //   dispatch({type: 'GANTI_NAMA', payload: nama});
  // };
  console.log(myName);

  return (
    <View>
      <Text>Profile</Text>

      <Text>
        {namaLengkap}, {age}
      </Text>

      <TextInput onChangeText={text => setMyName(text)} />

      <TouchableOpacity
        onPress={() => {
          dispatch(setNama(myName));
          dispatch(setAge(20));
        }}>
        <Text>Ubah Nama</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
