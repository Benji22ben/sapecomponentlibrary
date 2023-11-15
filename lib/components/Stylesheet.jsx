import {StyleSheet} from 'react-native';
import {sapePrimary, sapeTertiary} from '../constants';

const baseStyle = StyleSheet.create({
  touchableStyle: {
    width: 325,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Century-Gothic',
  },
});

function touchableStyle(inverted) {
  return {
    backgroundColor: !inverted ? sapePrimary : sapeTertiary,
  };
}
function touchableTextStyle(inverted) {
  return {
    color: inverted ? sapePrimary : sapeTertiary,
  };
}

export {baseStyle, touchableStyle, touchableTextStyle};
