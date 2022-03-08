import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import ReactNativeSplashScreen from 'react-native-splash-screen';
import MainRouter from './src/routes/MainRouter';
import Poppins from './src/component/Poppins/poppins';

const App = () => {
  useEffect(() => {
    ReactNativeSplashScreen.hide();
  }, []);

  return (
    <View>
      <Poppins type="Bold">Yohanes</Poppins>
      <Poppins>Yohanes</Poppins>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
