import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SomeScreen = props => {
  return (
    <View>
      <Text>Nama saya adalah {props.nama} {props.firstName} </Text>
    </View>
  );
};

export default SomeScreen;

const styles = StyleSheet.create({});
