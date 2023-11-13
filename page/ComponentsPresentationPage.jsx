import React from 'react';
import {Button, TouchableOpacity} from '../lib';
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
        <Button>Coucou</Button>
        <TouchableOpacity>
          <Text>Coucou</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComponentsPresentationPage;
