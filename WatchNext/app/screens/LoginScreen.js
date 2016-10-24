
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity} from 'react-native'
import ViewContainer from 'WatchNext/app/components/ViewContainer'
import StatusBarBackground from 'WatchNext/app/components/StatusBarBackground'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/Ionicons'


class LoginScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ViewContainer style={{backgroundColor: "white"}}>

                <Text style={{marginTop:100, fontSize:20, marginLeft: 20}}>{'Login Screen'}</Text>

            </ViewContainer>

        );
    }

}


const styles = StyleSheet.create({
    personName: {
        marginLeft: 25
    }


});

module.exports = PersonShowScreen
