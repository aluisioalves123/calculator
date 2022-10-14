import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const ButtonIcon = (props) => {
  return (
    <FontAwesome5 name={props.icon} size={18} color={props.color} />
  );
}

export default ButtonIcon