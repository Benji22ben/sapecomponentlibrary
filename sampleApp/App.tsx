import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const Colors = {
  darker: '#000000',
  lighter: '#ffffff',
  black: '#000000',
  white: '#ffffff',
};
import ComponentsPresentationPage from './page/ComponentsPresentationPage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ComponentsPresentationPage Colors={Colors} />
    </SafeAreaView>
  );
}

export default App;
