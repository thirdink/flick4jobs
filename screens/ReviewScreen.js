import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'

export class ReviewScreen extends Component {
  static navigationOptions =({navigation}) => ({
    title: 'Review Jobs',
    headerRight:  (
      <Button title='Settings' onPress={() => navigation.navigate('settings')} />
     )
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