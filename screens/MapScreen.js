import React, { Component } from 'react'
import { Text, View ,ActivityIndicator} from 'react-native'
import {MapView} from 'expo'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'

import * as actions from '../actions'

export class MapScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    mapLoaded:false,
    region: {
      longitude:  -97.7430608,
      latitude: 30.267153,
      longitudeDelta: 0.04,
      latitudeDelta:  0.09

    }
  }
  componentDidMount(){
    this.setState({ mapLoaded: true });
  }
  onRegionChangeComplete=(region)=>{
    console.log(region);
    this.setState({region})
  }
  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, ()=>{
      this.props.navigation.navigate('Deck');
    });
  }
  render() {
    if(!this.state.mapLoaded){
      return(
        <View style={{ flex:1, justifyContent:'center'}}>
        <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={{ flex:1 }}>
        <MapView
        region= {this.state.region}
         style={{ flex: 1}}
         onRegionChangeComplete={this.onRegionChangeComplete}
         />
         <View style={styles.buttonContainer}>
           <Button 
           large
           title="Search this Area"
           backgroundColor="#009688"
           icon={{name: 'search' }}
           onPress={this.onButtonPress}
           />
         </View>
      </View>
    )
  }
}
const styles ={
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left:0,
    right:0
  }
}

export default connect(null,actions)(MapScreen)