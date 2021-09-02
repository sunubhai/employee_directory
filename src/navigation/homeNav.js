// @flow

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgImage from '../themes/svgIcons';
import Home from '../containers/home';
import DetailScreen from '../containers/detailScreen';
import colors from '../themes/colors';

const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerShown: false,
        }}
      />

      <HomeStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  centerButton: {
    position: 'absolute',
    bottom: 10,
    height: 56,
    width: 56,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray1,
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
