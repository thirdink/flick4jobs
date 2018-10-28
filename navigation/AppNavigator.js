import React from 'react';
import { createSwitchNavigator ,createStackNavigator} from 'react-navigation';
import LoginTabNavigator from './LoginTabNavigator';
import MainTabNavigator from './MainTabNavigator';

// const MainStack = createStackNavigator({
//   Main : MainTabNavigator
// })
// MainStack.navigationOptions = {
//   tabBarVisible: false
// }

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  // Login: LoginTabNavigator
});