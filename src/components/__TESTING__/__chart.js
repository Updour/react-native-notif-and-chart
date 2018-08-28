'use strict';

import React, { Component } from 'react';

import { StyleSheet,	View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June'],
	datasets: [{
		data: [ 20, 45, 28, 80, 99, 43 ]
	}]
}
const screenWidth = Dimensions.get('window').width
export default class Charti extends Component {
	render() {
		return (
			<View>
  <Text>
    Bezier Line Chart
  </Text>
  <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
			);
	}
}