import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import Berita from './src/component/Berita';
import SomeScreen from './src/component/SomeScreen';

import contohAvatar from './src/assets/image/avatar-profile.png';

// state adalah data yang hanya bisa diakses oleh si component tersebut, terkecuali jika data tersebut dikirimkan via props
const App = () => {
  // todo

  const [firstName, setFirstName] = useState('Yohanes');
  const [age, setAge] = useState(21);

  if (firstName === 'Yohanes') {
    return (
      <View>
        <Text>ini render optional</Text>
        <TouchableOpacity onPress={() => setFirstName('Yohanes aja')}>
          <Text style={{fontSize: 40}}>Ganti nama yang atas</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <ScrollView>
        <View>
          <Text>
            Hello my name is {firstName} dan saya berumur {age} tahun{' '}
          </Text>

          <TouchableOpacity onPress={() => setFirstName('Yohanes')}>
            <Text style={{fontSize: 40}}>Ganti nama yang bawah</Text>
          </TouchableOpacity>

          <SomeScreen nama="Yohanes" firstName={firstName} />
          <SomeScreen nama="Velly" />
          <SomeScreen nama="Sabattino" />

          <Image source={contohAvatar} />

          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
          <Berita
            hari="jumat"
            tanggal="4/3/2022"
            skala={5.1}
            warning="tidak ber"
            kejadian="gempa"
          />
        </View>
      </ScrollView>
    );
  }
};

export default App;

const styles = StyleSheet.create({});
