import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View flex={1}>
        <View flex={1}>
          <Home />
        </View>
        <View flex={1}>
          <Profile />
        </View>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
