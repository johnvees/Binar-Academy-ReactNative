import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Profile = () => {
  const [nama, setNama] = useState('');
  const namaLengkap = useSelector(state => state.profile.name);
  const age = useSelector(state => state.profile.age);

  const dispatch = useDispatch();

  const handleName = () => {
    dispatch({type: 'GANTI_NAMA', payload: nama});
  };
  
  return (
    <View>
      <Text>Profile</Text>

      <Text>
        {namaLengkap}, {age}
      </Text>

      <TextInput onChangeText={text => setNama(text)} />

      <TouchableOpacity onPress={handleName}>
        <Text>Ubah Nama</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
