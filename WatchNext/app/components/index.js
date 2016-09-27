/**
 * Created by David on 2016-09-27.
 */
import React, { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Tabs from 'react-native-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WatchNext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'first'
        };
    }

    render() {
        const { page } = this.state;
        return (
            <View style={styles.container}>
                <Tabs
                    selected={page}
                    style={styles.tabbar}
                    selectedStyle={{color:'dodgerblue'}} onSelect={el=>this.setState({page:el.props.name})}
                >
                    <Text name="Home"><Icon name="home" size={20}/></Text>
                    <Text name="Favorites"><Icon name="star-o" size={20}/></Text>
                    <Text name="User"><Icon name="user" size={20}/></Text>
                    <Text name="Settings"><Icon name="cogs" size={20}/></Text>
                </Tabs>

                <Text>WatchNext App</Text>
                <Text>{page}</Text>
            </View>
        )
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