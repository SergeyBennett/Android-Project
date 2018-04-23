import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { getColor } from '../../util/helpers'
import Icon from '../../styles/Icon'

export default class AddNoteButton extends Component {
    render() {
        return (

            <View style={styles.selection_button}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Icon name="add-circle" size={56} color={getColor('paperBlue')} />
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
        position: 'absolute',
        bottom: 15,
        right: 15,
        backgroundColor: 'white',
        borderRadius: 50
    }
})