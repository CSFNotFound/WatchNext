import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserScreen from '../../app/screens/UserScreen';
import HomeScreen from '../../app/screens/HomeScreen';
import MyListScreen from '../../app/screens/MyListScreen';
import SettingsScreen from '../../app/screens/SettingsScreen';

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'HomeScreen'
        };
    }

    render() {
        const { page } = this.state;
        
        return (<View style={styles.container}>
            <Tabs
                selected={page}
                style={styles.tabbar}
                selectedStyle={{color: 'dodgerblue'}} onSelect={el=>this.setState({page: el.props.name})}
            >
                <Text name="HomeScreen"><Icon name="home" size={20}/></Text>
                <Text name="MyListScreen"><Icon name="star-o" size={20}/></Text>
                <Text name="UserScreen"><Icon name="user" size={20}/></Text>
                <Text name="SettingsScreen"><Icon name="cogs" size={20}/></Text>
            </Tabs>

            {this.getCurrentPageContent(page)}

        </View>)
    }

    getCurrentPageContent(page){

        switch(page){
            case "UserScreen":
                return <UserScreen/>;
            case "MyListScreen":
                return <MyListScreen/>;
            case "SettingsScreen":
                return <SettingsScreen/>;
            default:
                return <HomeScreen/>;
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabbar: {
        backgroundColor:'white',
        height: 64,
        borderTopColor: 'dodgerblue',
        borderTopWidth: 2
    }
});