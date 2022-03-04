import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import React from 'react';
import OptionList from './src/component/OptionList';

import avatar from './src/assets/image/avatar-profile.png';
import bannerCar from './src/assets/image/car-banner.png';

const App = () => {
  const callMyName = () => {
    return 'Yohanes Velly Sabattino';
  };

  return (
    <View style={styles.containerCoba}>
      <StatusBar backgroundColor="red" />
      <OptionList />
      <OptionList />
      <OptionList />
      <OptionList />
    </View>
    // <View style={styles.container}>
    //   <View style={styles.content}>
    //     <View style={styles.welcome}>
    //       <View>
    //         <Text style={styles.name}>Hi, {callMyName()}</Text>
    //         <Text style={styles.location}>Surabaya</Text>
    //       </View>
    //       <Image source={avatar} style={styles.avatar} />
    //     </View>
    //     <View style={styles.banner}>
    //       <Text style={styles.bannerText}>
    //         Sewa Mobil Berkualitas di kawasanmu
    //       </Text>
    //       <Image source={bannerCar} style={styles.bannerCar} />
    //     </View>
    //   </View>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerCoba: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
  },
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  content: {
    backgroundColor: '#D3D9FD',
    height: '25%',
    padding: 16,
  },
  welcome: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 40,
    height: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: '300',
    color: '#000',
  },
  location: {
    marginTop: 4,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  banner: {
    marginTop: 20,
    backgroundColor: '#091B6F',
    borderRadius: 8,
  },
  bannerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '400',
    maxWidth: '50%',
    marginTop: 24,
    marginStart: 24,
  },
  bannerCar: {
    width: 180,
    height: 110,
  },
});
