import {StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CodePush from 'react-native-code-push';
import Easing from 'react-native/Libraries/Animated/Easing';

const App = () => {
  const leftValue = useState(new Animated.Value(0))[0];
  const opacity = useState(new Animated.Value(0))[0];

  const moveBall = () => {
    Animated.timing(leftValue, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const moveBallWithEasing = () => {
    Animated.timing(leftValue, {
      toValue: -300,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.back(),
    }).start();
  };

  const moveBallWithSpring = () => {
    Animated.spring(leftValue, {
      toValue: 300,
      useNativeDriver: false,
    }).start();
  };

  const fadeInBall = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutBall = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      {/* <Text>App</Text>
      <Text>Hello for first release</Text>
      <Text>Hello for second release</Text>
      <Text>Test For Animation</Text> */}
      <Animated.View
        style={{
          borderRadius: 50 / 2,
          width: 50,
          height: 50,
          backgroundColor: 'red',
          marginLeft: leftValue,
          // opacity
        }}
      />
      <Animated.View
        style={{
          borderRadius: 50 / 2,
          width: 50,
          height: 50,
          backgroundColor: 'red',
          // marginLeft: leftValue,
          opacity,
        }}
      />
      <TouchableOpacity onPress={moveBall}>
        <Text>Move Me!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveBallWithEasing}>
        <Text>Move Me Easing!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveBallWithSpring}>
        <Text>Move Me Spring!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeInBall}>
        <Text>Move Me Fade In!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOutBall}>
        <Text>Move Me Fade Out!</Text>
      </TouchableOpacity>
    </View>
  );
};

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START};
export default CodePush(codePushOptions)(App);

const styles = StyleSheet.create({});
