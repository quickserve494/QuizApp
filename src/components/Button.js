import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({w, h, color, text, bgcolor, onClick}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        width: w,
        height: h,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: bgcolor,
        borderRadius: 10,
        opacity: 0.5,
      }}>
      <Text style={{color: color}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
