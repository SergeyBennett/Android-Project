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
import {styles} from '../../styles/styles'

export default class AddNoteButton extends Component {
    render() {
        return (

            <View>
                <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.selection_button}>
                    <Text style={styles.selection_button_text}>Notes</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handlePress() {
        this.props.onBtnPress()
    }
}

