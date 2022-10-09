import React from 'react';
import { View, Text } from 'react-native';

const Button = (props) => {
  return (
    <View className='rounded-xl basis-1/5 items-center justify-center' style={{backgroundColor: "#282833"}}>
      {props.children}
    </View>
  );
}

export default Button;