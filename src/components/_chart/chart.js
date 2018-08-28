'use strict'
import React, { Component } from 'react'
import {  StatusBar } from 'react-native'
import {
	Container,
	Header,
	Left,
	Button,
	Icon,
	Body,
	Title,
	Right,
	Content,
	Text
} from 'native-base'
import _ChartLine from './_ChartLine'

export default class Chart extends Component {
	render(){
		return(
			<Container>
				<Header style={{backgroundColor: 'red'}} > 
					<StatusBar
						backgroundColor="#e60000"
						barStyle="light-content"
					/>
				<Left>
					<Button	transparent
					onPress={() => this.props.navigation.navigate("DrawerOpen")}>
				<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Proccess</Title>
				</Body>
					<Right />
				</Header>

				<Content>
					<_ChartLine />
				</Content>
			</Container>
			)
	}
}