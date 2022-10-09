import React from 'react';
import { View, Text } from 'react-native';

const ButtonText = (props) => {
  return (
    <Text className='text-white text-2xl font-bold' style={{color: props.color}}>
      {props.text}
    </Text>
  );
}

export default ButtonText;