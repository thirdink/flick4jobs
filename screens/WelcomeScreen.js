import _ from 'lodash'
import React, {
  Component
} from 'react'
import {
  Text,
  View,
  AsyncStorage
} from 'react-native'
import {
  AppLoading
} from 'expo'
import Slides from '../components/Slides';

const SLIDE_DATA = [{
    text: 'Welcome to JOBAPP',
    color: '#2E5D7F'
  },
  {
    text: 'use this to get a job',
    color: '#016635'
  },
  {
    text: 'Set your location, then swipe away',
    color: '#B80528'
  }

]

export class WelcomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    token: null
  }
}

  static navigationOptions = {
    header: null,
  };
  async componentWillMount() {
    // this.mounted = true;
    // let token = await AsyncStorage.getItem('fb_token');
    
    // if (token) {
    //   this.props.navigation.navigate('Map');
    //   this.setState({ token });
    // } else {
    //   this.setState({
    //     token: false
    //   })
    // }
    this.checkToken();
  }

  checkToken = async () => {
    const token = await AsyncStorage.getItem('fb_token')
    if (token) {
      this.setState({ token });
      this.props.navigation.navigate('Map');
    } else {
      this.setState({
        token: false
      })
    }
  }




  onSlidesComplete = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading / >
    }
    return ( <
      Slides data = {
        SLIDE_DATA
      }
      onComplete = {
        this.onSlidesComplete
      }
      />
    )
  }
}

export default WelcomeScreen