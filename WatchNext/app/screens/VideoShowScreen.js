
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, AlertIOS} from 'react-native'
import ViewContainer from 'WatchNext/app/components/ViewContainer'
import StatusBarBackground from 'WatchNext/app/components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'

import Video from 'react-native-video';

class VideoShowScreen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer style={{backgroundColor: "aliceblue"}}>

        <StatusBarBackground />

        <TouchableOpacity onPress={() => this.props.navigator.pop() } style={{marginLeft: 20}}>
          <Icon name="ios-arrow-down" size={30}/>
        </TouchableOpacity>

        <Text style={{marginTop:100, fontSize:20, marginLeft: 20}}>{'Video show screen'}</Text>

        

      </ViewContainer>

    );
  }

}


const styles = StyleSheet.create({
  personName: {
    marginLeft: 25
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }

});


module.exports = VideoShowScreen
