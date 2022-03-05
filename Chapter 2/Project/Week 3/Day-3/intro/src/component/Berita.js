import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Berita = props => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          textAlign: 'center',
          marginTop: 16,
          color: 'black',
          fontWeight: '900',
        }}>
        Gempa Dengan Magnitudo {props.skala}
      </Text>
      <Text style={{fontSize: 20, marginTop: 20}}>
        Pada hari {props.hari} tanggal {props.tanggal} telah terjadi gempa bumi
        dengan magnitudo {props.skala} ritcher dan {props.warning}potensi{' '}
        {props.kejadian} susulan{' '}
      </Text>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({});
