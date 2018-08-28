
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header,Button,Icon,Title,Content, Text } from 'native-base'
export default class AppNotif extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data:[]
	  };
	}
	//https://onesignal.com/api/v1/notifications
		_getNotifications() {
			var url = 'https://onesignal.com/api/v1/notifications';
			var data = {
				app_id: "fd977379-09d6-4638-af0b-1db4ce5ee459",
	  			contents: {"en": "notifications"},
	  			include_player_ids : ["972d8605-5b35-4905-bd95-3fcbf2e1dfb3"]};

			fetch(url, {
			  method: 'POST', // or 'PUT'
			  body: JSON.stringify(data), // data can be `string` or {object}!
			  headers:{
    			"Content-Type": "application/json; charset=utf-8",
			  	 "Authorization": "Basic OTQ4ZGUwYTktYjFmNS00MjUwLWJjNDgtMGRmMDE0NWVkMDRi"
			  }
			})
			.then(res => res.json())
			.then((response => {
				set.setState({
					data:data
				})
				console.warn(data)
			}
			))
			.catch(error => console.error('Error:', error));
		}


  render() {
    return (
      <Container>
      <Header/>
      	<Content>
      		<Button onPress={this._getNotifications}>
      			<Text>getnotif</Text>
      		</Button>
      	</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
