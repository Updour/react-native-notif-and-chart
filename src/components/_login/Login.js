import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, StatusBar, ToastAndroid, Keyboard, TouchableOpacity } from 'react-native';
import {
  Container, Header, Content, Form, Item, Input, Label, Button, Text, Title, Left, Body, Right, Icon,
  Card, CardItem,
} from 'native-base';
import { StackNavigator, NavigationActions } from "react-navigation";
// import Storage from 'react-native-storage';
import styles from './styles';
import OfflineNotice from '../_notifications/OfflineNotice'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'tryupdour@gmail.com',
      password: '123123', 
    };
    this.LoginUser = this.LoginUser.bind(this);

  }

  clearAndNavigate(screen) {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: screen })
        ]
      })
    );
  }




  //for login\\\
  LoginUser = () => {
    if (this.state.email == "") {
      ToastAndroid.show('Email can not be empty', ToastAndroid.SHORT)
    } else if (this.state.password == "") {
      ToastAndroid.show('Password can not be empty', ToastAndroid.SHORT)
    }
  }



  render() {
    let { email, password, } = this.state;
    let styleemail = email ? styles.a : styles.b;
    let iconemail = email ? styles.c : styles.d;
    let stylesPass = password ? styles.a : styles.b;
    let iconsPass = password ? styles.c : styles.d;
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar
            backgroundColor="#e60000"
            barStyle="light-content"
          />
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.content} >
        <OfflineNotice />
          <Content style={styles.login}>
            <Form>
              <Item floatingLabel style={styles.Lname}>
                <Icon active name="ios-mail-outline" style={iconemail} />
                <Label style={styleemail}>User Email</Label>
                <Input 
                  onChangeText= {email => this.setState({email})} 
                  returnKeyType="next"

                />
              </Item>
              <Item floatingLabel style={styles.Lname}>
                <Icon active name="ios-lock-outline" style={iconsPass} />
                <Label style={stylesPass}>User Password</Label>
                <Input
                  onChangeText= {password => this.setState({password})}
                  secureTextEntry={this.state.hidePassword}
                />
              </Item>
            </Form>
            <Button block style={styles.button}
              onPress={()=>this.props.navigation.navigate('Home') } >
              <Text>Login</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    );
  }
}