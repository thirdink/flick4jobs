import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MapScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <Text> MapScreen </Text>
      </View>
    )
  }
}

export default MapScreen