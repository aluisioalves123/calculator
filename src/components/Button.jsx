import React from 'react';
import { Pressable } from 'react-native';

const Button = (props) => {
  return (
    <Pressable className='rounded-xl basis-1/5 items-center justify-center' style={{backgroundColor: "#282833"}} onPress={props.onPress}>
      {props.children}
    </Pressable>
  );
}

export default Button;