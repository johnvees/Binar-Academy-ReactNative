import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View>
      <Text>Ini adalah card</Text>
      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
