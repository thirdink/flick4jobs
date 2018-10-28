import React, { Component } from 'react'
import { Text, View,AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions';


export class AuthScreen extends Component {
  componentDidMount(){
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');
    this.onAuthComplete(this.props);
  }
  componentWillReceiveProps(nextProps){
    this.onAuthComplete(nextProps)
  }
  onAuthComplete(props){
    if(props.token){
      this.props.navigation.navigate('Map');
    }
  }

  render() {
    return (
      <View>
        <Text> AuthScreen </Text>
      </View>
    )
  }
}
function mapStateToProps({ auth }){
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen)