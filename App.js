/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//mas 
// build ulang mas appnya, sek mas, coba cek in di build gradlenya mas
// coba build mas
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Test from './src/components/__TESTING__/Test'
// import HomeScreenRouter from './src/dashboard/'
// import OfflineNotice from './src/dashboard/OfflineNotice'
import HomeScreenRouter from './src/components/_dashboards/'

export default class App extends Component<Props> {
  render() {
    return (
      <HomeScreenRouter />
    );
  }
}
