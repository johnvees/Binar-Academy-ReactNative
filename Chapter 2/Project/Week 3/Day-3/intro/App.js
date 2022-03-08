import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import ReactNativeSplashScreen from 'react-native-splash-screen';
import MainRouter from './src/routes/MainRouter';

const App = () => {
  useEffect(() => {
    ReactNativeSplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
