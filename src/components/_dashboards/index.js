import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import LoginRouter from '../_login/index'
import DashBoArdList from '../_dashboards/dAhboArdList'
import SettingServer from '../_settingServers/SettingServer'
import SidebAr from '../_sidebar/sidebArSetting'
import Chart from '../_chart/chart'
const HomeScreenRouter = DrawerNavigator(
  {
    Login : { screen : LoginRouter },
    Home : { screen : DashBoArdList},
    Setting : { screen : SettingServer },
    Chart : { screen : Chart }
  },
  {
    contentComponent: props => <SidebAr {...props} />
  }
);
export default HomeScreenRouter;
