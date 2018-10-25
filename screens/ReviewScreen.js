import React, { Component } from 'react'
import { Text, View,Platform } from 'react-native'
import {Button} from 'react-native-elements'

export class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight:( 
 
    <Button 
    title='Settings' 
    onPress={() => navigation.navigate('Settings')} 
    backgroundColor="rgba(0,0,0,0)"
    color="rgba(0,122,255,1)"

    />
    ),
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 },
  });
  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
      </View>
    )
  }
}

export default ReviewScreen