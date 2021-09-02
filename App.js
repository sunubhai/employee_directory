/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import AppContainer from './src/navigation';

LogBox.ignoreAllLogs(true);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
