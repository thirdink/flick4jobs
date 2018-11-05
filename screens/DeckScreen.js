import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, View ,Platform} from 'react-native'
import {MapView} from 'expo';
import {Card,Button} from 'react-native-elements'
import Swipe from './Swipe'
import * as actions from '../actions'

export class DeckScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  renderCard(job){
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }
    return(
      <Card title={job.jobtitle}>
      <View style={{ height: 300 }}>
      <MapView 
      scrollEnabled={false}
      style={{flex: 1}}
      cacheEnabled={Platform.OS === 'android'? true:false}
      initialRegion={initialRegion}
      >

      </MapView>
      </View>
      
      <View style={styles.detailWrapper}>
        <Text>
          {job.company}
        </Text>
        <Text>
          {job.formattedrelativeTime}
        </Text>
      </View>
      <Text>
        {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
      </Text>

      </Card>
    )
  }
  renderNoMoreCards(){
    return (
      <Card title="No More Jobs">

      </Card>
    )
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <Swipe
        data={this.props.jobs}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards}
        onSwipeRight = { job => this.props.likeJob(job)}
        keyProp="jobkey"
        />
      </View>
    )
  }
}
const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}
function mapStateToProps({jobs}){
  return { jobs: jobs.results }
}
export default connect(mapStateToProps, actions )(DeckScreen)