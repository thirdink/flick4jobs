import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {
    text: 'Welcome to JOBAPP',
    color: '#03A9F4'
  },
  {
    text: 'use this to get a job',
    color: '#009688'
  },
  {
    text: 'Set your location, then swipe away',
    color: '#03A9F4'
  }

]

export class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  onSlidesComplete=()=>{
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    )
  }
}

export default WelcomeScreen