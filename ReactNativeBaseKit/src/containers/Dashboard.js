import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Constants from '../constants';
import Home from './home';
import Messages from './messages';
import More from './more';
import Profile from './profile';

const tabBarOptions = {
  animationEnabled: false,
  initialRouteName: 'Home',
  lazy: true,
  lazyLoad: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeBackgroundColor: 'grey',
    activeTintColor: '#FF5B5B',
    inactiveBackgroundColor: '#fff',
    inactiveTintColor: 'gray',
    showIcon: true,
    showLabel: false,
    style: Constants.BaseStyle.TAB_GROUP_STYLE,
  },
  tabBarPosition: 'bottom',
};

const styles = StyleSheet.create({
  logo: {
    height: 22,
    width: 22,
  },
});

/* eslint-disable */
const routes = {
  Home: {
    screen: Home,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Constants.Images.home : Constants.Images.home}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Constants.Images.profile : Constants.Images.profile}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
  Messages: {
    screen: Messages,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Constants.Images.message : Constants.Images.message}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
  More: {
    screen: More,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Constants.Images.more : Constants.Images.more}
          style={styles.logo}
          resizeMode="contain"
        />
      ),
    }),
  },
};

const Dashboard = createBottomTabNavigator(routes, tabBarOptions);

export default createAppContainer(Dashboard);
