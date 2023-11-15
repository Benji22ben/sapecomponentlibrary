import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {baseStyle, touchableStyle, touchableTextStyle} from './Stylesheet';

function SapeTouchableOpacity({
  children = '',
  style,
  invertedColors = false,
  text,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[baseStyle.touchableStyle, touchableStyle(invertedColors), style]}
      {...props}>
      <View>
        {text ? (
          <Text style={[touchableTextStyle(invertedColors)]}>{text}</Text>
        ) : (
          ''
        )}
        {children ?? children}
      </View>
    </TouchableOpacity>
  );
}

export default SapeTouchableOpacity;
