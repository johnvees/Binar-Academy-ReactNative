import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import PDF from 'react-native-pdf';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My PDF Document Project!</Text>
      <Button title="Open PDF Document" />
      <PDF
        source={{
          uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        }}
        style={{height: 600, width: 300}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

// <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//   <Text>My Video Project!</Text>
//   <Video
//     source={{
//       uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//     }}
//     style={{width: 300, height: 300}}
//     fullscreen={true}
//     controls={true}
//     poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
//   />
// </View>
