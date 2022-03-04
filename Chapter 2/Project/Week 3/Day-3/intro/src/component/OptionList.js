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
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
  },
});
