import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import {Provider} from 'react-redux';
import {store} from './src/store';
import {Root} from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
