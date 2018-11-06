import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingScreen from '../screens/SettingsScreen';
const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  // header:null,
  tabBarLabel: 'Map',
  
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

const DeckStack = createStackNavigator({
  Deck: DeckScreen,
 
});

DeckStack.navigationOptions = {
  tabBarLabel: 'Jobs',
  // header:null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const ReviewStack = createStackNavigator({
  Review: ReviewScreen,
  Settings: SettingScreen,
});

ReviewStack.navigationOptions = {
  tabBarLabel: 'review',
  // header:null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-checkmark-circle${focused ? '' : '-outline'}` : 'md-checkmark-circle'}
    />
  ),
};


export default createBottomTabNavigator({
  MapStack,
  DeckStack,
  ReviewStack
});
