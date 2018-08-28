import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import { Container, Content, Text, List, ListItem, Button, Left, Right, Body, Icon } from "native-base";

export default class SidebAr extends React.Component {
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Image
            source={require('../../assets/images/sidebarr.jpg')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
             />
           <List>
            <ListItem itemDivider >
              <Text>Apps</Text>
            </ListItem>
            <ListItem avatar>
              <Left>
               <Icon name="ios-home-outline" />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Home")}>
                  <Text >Home</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name="ios-settings-outline" />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Setting")}>
                  <Text>Setting Server</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
              <ListItem avatar>
                <Left>
                  <Icon name="ios-stats-outline"/>
                </Left>
                <Body>
                  <TouchableOpacity onPress= {() => navigate("Chart")}>
                    <Text>Process</Text>
                  </TouchableOpacity>
                </Body>
              </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name="ios-log-out-outline" />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Login")}>
                  <Text>Log Out</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            </List>

        </Content>
      </Container>
    );
  }
}
