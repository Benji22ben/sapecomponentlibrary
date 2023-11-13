import React from 'react';
import {TouchableHighlight} from 'react-native';
import baseStyle from './Stylesheet';

function SapeTouchableHighlight({children = '', style, ...props}) {
  return (
    <TouchableHighlight style={[baseStyle.touchable, style]}>
      {children}
    </TouchableHighlight>
  );
}

export default SapeTouchableHighlight;
