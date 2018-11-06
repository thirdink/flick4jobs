import React from 'react';
import { Platform, StatusBar, StyleSheet, View ,Alert} from 'react-native';
import { Provider } from 'react-redux';
import registerForNotifications from './services/push_notifications'
import store from './store'
import { Notifications } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  componentDidMount(){
    registerForNotifications()
    Notifications.addListener((notification)=>{

      const{ data: { text },origin} = notification;

      if(origin === 'received' && text ){
      Alert.alert(
        'New Push Notification',
        text,
        [{ text: 'OK. '}]
      )
      }
    })

  }

  render() {

      return (
        <Provider  store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
        
      );
    }
  




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
