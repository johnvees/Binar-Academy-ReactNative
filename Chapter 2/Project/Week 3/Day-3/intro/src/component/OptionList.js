import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OptionList = () => {
  return (
    <View style={styles.container}>
      <Text>Mobil</Text>
    </View>
  );
};

export default OptionList;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
