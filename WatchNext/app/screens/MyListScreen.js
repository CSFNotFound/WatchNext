import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyListScreen extends Component {

    render() {
        return (
            <Text>This is the My List Screen</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

module.exports = MyListScreen;