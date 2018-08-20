import React, { Component } from "react";
import {
	View, 
	Text
} from 'react-native';
import OneSignal from 'react-native-onesignal';

export default class Test extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentDidMount() {
        OneSignal.init("fd977379-09d6-4638-af0b-1db4ce5ee459");
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds.bind(this));

        OneSignal.configure();
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds.bind(this));
    }

    onReceived(notification) {
        console.warn("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.warn('Message: ', openResult.notification.payload.body);
        console.warn('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }

    onIds(device) {
        console.log('Device info: ', device);
    }

    render() {
    	return(
    		<View>
    			<Text>Test aja</Text>
    		</View>
    	)
    }
}