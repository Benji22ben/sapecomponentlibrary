import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import {baseStyle, touchableStyle, touchableTextStyle} from './Stylesheet';

function SapeTouchableHighlight({
  children = false,
  style,
  invertedColors = false,
  text,
  ...props
}) {
  return (
    <TouchableHighlight
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
    </TouchableHighlight>
  );
}

export default SapeTouchableHighlight;
