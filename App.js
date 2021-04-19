import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Searchscreen from './screens/searchscreen';
import Transactionscreen from './screens/transactionscreen';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transactionscreen},
  search:{screen:Searchscreen}
})
const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
