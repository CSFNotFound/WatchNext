
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity, Navigator} from 'react-native'
import ViewContainer from 'WatchNext/app/components/ViewContainer'
import StatusBarBackground from 'WatchNext/app/components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

import Button from 'react-native-button';


const people = [
  {firstName: "charles", lastName: "macDuff", number: 10},
  {firstName: "david", lastName: "boudreault", number: 15},
  {firstName: "sam", lastName: "roy", number: 43}
]

class PeopleIndexScreen extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

    this.state = {
      peopleDataSource : ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>

        <StatusBarBackground />

        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'aliceblue'}}
          style={{fontSize: 20, color: 'blue'}}
          onPress={() => this._navigateToVideo()}>
          Video Button!
        </Button>

        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'lavenderblush'}}
          style={{fontSize: 20, color: 'blue'}}
          onPress={() => this._navigateToSwipe()}>
          Swipeee Button!
        </Button>

        <ListView
          style={{marginTop:50}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person)} }/>

        <Text>
          Hello from the other side Salut! sa va? HAJKDHAJSHFJKh
        </Text>
      </ViewContainer>

    );
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={ (event) => this._navigateToPersonShow(person)}>
        <Text style={styles.personName}>
          {_.capitalize(person.firstName)} {_.capitalize(person.lastName)}
        </Text>
        <View style={{flex:1}} />
        <Icon name = "chevron-right"  style={styles.personIcon}/>
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person: person,
      //sceneConfig:Navigator.SceneConfigs.FloatFromBottom
    })
  }


  _navigateToVideo() {
    this.props.navigator.push({
      ident: "VideoShow",
      sceneConfig:Navigator.SceneConfigs.FloatFromBottom
    })
  }

  _navigateToSwipe() {
    this.props.navigator.push({
      ident: "SwipeShow",
      sceneConfig:Navigator.SceneConfigs.FloatFromBottom
    })
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height:40
  },

  personName: {
    marginLeft: 25
  },

  personIcon: {
    marginRight: 25
  }


});

module.exports = PeopleIndexScreen
