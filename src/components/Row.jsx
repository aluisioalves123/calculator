import React from 'react'
import { View, Text } from 'react-native'

const Row = (props) => {
  return (
    <View className='flex flex-row basis-1/6 justify-between'>
      {props.children}
    </View>
  );
}

export default Row