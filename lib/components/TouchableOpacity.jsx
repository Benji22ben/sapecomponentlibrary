import React from 'react';
import {TouchableOpacity} from 'react-native';
import baseStyle from './Stylesheet';

function SapeTouchableOpacity({children = '', style, ...props}) {
  return (
    <TouchableOpacity style={[baseStyle.touchable, style]}>
      {children}
    </TouchableOpacity>
  );
}

export default SapeTouchableOpacity;
