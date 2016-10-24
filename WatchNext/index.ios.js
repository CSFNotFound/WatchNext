
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, Text} from 'react-native'

import PeopleIndexScreen from './app/screens/PeopleIndexScreen'
import PersonShowScreen from './app/screens/PersonShowScreen'
import VideoShowScreen from './app/screens/VideoShowScreen'
import SwipeShowScreen from './app/screens/SwipeShowScreen'
//import VideoShowScreen from './app/screens/TestVideoShowScreen'

class WatchNext extends Component {

  _renderScene( route, navigator) {

    var globalNavigatorProps = { navigator }

    switch (route.ident) {
      case "PeopleIndex":
        return (
          <PeopleIndexScreen {...globalNavigatorProps} />
        )

      case "PersonShow":
        return (
          <PersonShowScreen
          {...globalNavigatorProps}
          person={route.person}/>
        )

      case "VideoShow":
        return (
          <VideoShowScreen
          {...globalNavigatorProps}/>
        )

      case "SwipeShow":
        return (
          <SwipeShowScreen
          {...globalNavigatorProps}/>
        )

      default:
        return (
          <Text>{'Mauvaise route'}</Text>
        )
      }
  }


  render() {
    return (
      <Navigator
      initialRoute={{ident: "PeopleIndex"}}
      ref="appNavigator"
      style={styles.navigatorStyles}
      renderScene={this._renderScene}
      configureScene={(route) => ({
        ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}


const styles = StyleSheet.create({

  navigatorStyles: {

  }

});

AppRegistry.registerComponent('WatchNext', () => WatchNext);
