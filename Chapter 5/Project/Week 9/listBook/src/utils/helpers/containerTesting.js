import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {persistedStore, store} from '../store';
import {navigationRef} from './navigate';

export default function ContainerTesting(component) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>{component}</PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
