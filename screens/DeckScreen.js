import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class DeckScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <Text> DeckScreen </Text>
      </View>
    )
  }
}

export default DeckScreen