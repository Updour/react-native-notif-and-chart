'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	Dimensions
} from 'react-native';
import { Container, Header, Content, Text } from 'native-base'
import { LineChart, ProgressChart, PieChart, BarChart } from 'react-native-chart-kit'


export default class _ChartLine extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dAtAchArts : {
				labels: ['January', 'February', 'March', 'April', 'May', 'June'],
				datasets: [{
					data: [ 10, 30, 90, 98, 50, 63 ]
				}]
			},
			dAtApRogreschArts : [0.4, 0.6, 0.8],

		};
	}
	render() {
		return (
			<Container>
				<Header />
					<Content>
						<Text>asd</Text>
							<LineChart
								data={this.state.dAtAchArts}
								width={screenWidth}
								height={220}
								chartConfig={chartConfig}
							/>
						<Text>Progres chart</Text>
							<ProgressChart
							  data={this.state.dAtApRogreschArts}
							  width={screenWidth}
							  height={220}
							  chartConfig={chartConfig}
							/>
						<Text>Pie Chart</Text>
							<PieChart
							  data={dataPie}
							  width={screenWidth}
							  height={220}
							  chartConfig={chartConfig}
							  accessor="population"
							  bgColor="transparent"
							  paddingLeft="15"
							/>
						<Text>Bar chart</Text>
						<BarChart
						  data={this.state.dAtAchArts}
						  width={screenWidth}
						  height={220}
						  chartConfig={chartConfig}
						/>
					</Content>
			</Container>
			);
	}
}
//config chart
let screenWidth = Dimensions.get('window').width
const chartConfig = {
	backgroundGradientFrom: '#1E2923',
	backgroundGradientTo: '#08130D',
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}
const dataPie = [
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F, legendFontSize: 15' }
]