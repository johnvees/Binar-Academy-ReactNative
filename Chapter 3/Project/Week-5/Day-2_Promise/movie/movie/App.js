import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
