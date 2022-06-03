import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

const Input = ({onChangeText, value, placeholder, error}) => {
  const win = Dimensions.width;
  return (
    <View style={{marginVertical: 10, height: 50, width: win}}>
      <TextInput
        style={{
          flex: 1,
          borderColor: 'grey',
          borderRadius: 6,
          borderWidth: 1,
          justifyContent: 'center',
        }}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}>
        <Text style={{color: 'red', marginTop: 5}}>{error}</Text>
      </TextInput>
    </View>
  );
};

const App = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleReset, values}) => (
        <SafeAreaView>
          <Text>Welcome to Test Formiks Form</Text>
          <Input
            placeholder={'Username'}
            onChangeText={handleChange('email')}
            // value={values.email}
            error="Input Valid Email"
          />
          <Input
            placeholder={'Password'}
            onChangeText={handleChange('password')}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default App;

const styles = StyleSheet.create({});
