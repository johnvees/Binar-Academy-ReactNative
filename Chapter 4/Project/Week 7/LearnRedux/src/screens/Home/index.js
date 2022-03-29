import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {
  const namaLengkap = useSelector(state => state.profile.name);
  const age = useSelector(state => state.profile.age);

  return (
    <View>
      <Text>Home</Text>
      <Text>{namaLengkap}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
