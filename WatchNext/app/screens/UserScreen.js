import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native';

let UID123_user = {
    name: 'Charles',
    age: '20',
};
AsyncStorage.setItem("UID123",UID123_user);

class UserScreen extends Component {
    componentDidMount: function() {
        AsyncStorage.getItem("myKey").then((value) => {
            this.setState({"myKey": value});
        }).done();
    }
    getInitialState: function() {
    return { };
    }
    render: function() {
    return (
        <View style={styles.container}>
            <Text style={styles.saved}>
                {this.state.myKey}
            </Text>
            <View>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(text) => this.saveData(text)}
                    value="" />
            </View>
            <Text style={styles.instructions}>
                Type something into the text box.  It will be saved to
                device storage.  Next time you open the application, the saved data
                will still exist.
            </Text>
        </View>
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

module.exports = UserScreen;