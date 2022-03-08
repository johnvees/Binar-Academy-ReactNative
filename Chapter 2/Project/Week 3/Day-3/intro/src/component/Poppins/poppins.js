import React from 'react';
import {Text} from 'react-native';

const Poppins = ({type = 'Regular', children}) => {
  return <Text style={{fontFamily: `Poppins-${type}`}}>Hallo {children}</Text>;
};

export default Poppins;
