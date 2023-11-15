import React from 'react';
import {Button, StyleSheet} from 'react-native';

function SapeButton({children = '', ...props}) {
  return (
    <Button
      props
      color={props.color ? props.color : '#80EDB9'}
      title={children}
    />
  );
}

export default SapeButton;
