import {StyleSheet} from 'react-native';
import {primaryColor} from '../constants';

const baseStyle = StyleSheet.create({
  touchable: {
    backgroundColor: primaryColor,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Century-Gothic',
  },
});

export default baseStyle;
