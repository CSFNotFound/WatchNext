import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SettingsScreen extends Component {

    render() {
        return (
            <Text>This is the setting Screen</Text>
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

module.exports = SettingsScreen;