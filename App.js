import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import LoginScreen from './Screens/LoginScreen'
import MapScreen from './Screens/MapScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = TabNavigator({
  LoginScreen: { screen: LoginScreen },
  MapScreen: { screen: MapScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
