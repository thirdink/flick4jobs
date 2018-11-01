import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

// import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import LoginTabNavigator from './LoginTabNavigator';

const HomeStack = createStackNavigator({
  Home: WelcomeScreen,
  Auth: AuthScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Welcome',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
});

AuthStack.navigationOptions = {
  tabBarLabel: 'Auth',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const LoginStack = createStackNavigator({
  Main: LoginTabNavigator,
});

LoginStack.navigationOptions = {
  // header:null,
  tabBarLabel: 'Main',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AuthStack,
  // LoginStack,
});
