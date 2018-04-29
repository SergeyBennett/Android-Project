//
// Add New Note Button
//
import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class AddNoteButton extends Component {
    render() {
        return (

            <View style={styles.selection_button}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Text>Press me! I am add lists button!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handlePress() {
        this.props.onBtnPress()
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
        //,borderColor: 'gray'
    }
})
