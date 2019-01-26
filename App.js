import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from './Screens/LoginScreen'
import MapScreen from './Screens/MapScreen'
import CodeScreen from './Screens/CodeScreen'

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
 CodeScreen: { screen:CodeScreen },
  MapScreen: { screen: MapScreen},
  LoginScreen:{ screen: LoginScreen},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
