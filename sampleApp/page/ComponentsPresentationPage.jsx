import React from 'react';
import {
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'sape-react-native-components';
import {ScrollView, View, useColorScheme, StyleSheet, Text} from 'react-native';

function ComponentsPresentationPage(Colors) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        ]}>
        <Button>Button</Button>
        <TouchableOpacity text="TouchableOpacity" />
        <TouchableHighlight
          onPress={() => console.log('Needed to see highlight')}
          invertedColors
          text="TouchableHighlight (inverted colors)"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 50,
  },
});

export default ComponentsPresentationPage;
