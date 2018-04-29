//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { getColor } from '../../util/helpers'

export default class Toolbar extends Component {
  render() {
    const {
      color,
      title
    } = this.props;

    return (
      <View style={[ styles.toolbar, { backgroundColor: getColor(color) } ]}>
        <Text style={[ styles.title, {fontSize: 22} ]}>
          {title.toUpperCase()}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 64,
    justifyContent: 'flex-end',
      paddingBottom: 10
  },
  title: {
    marginLeft: 14,
    color: 'white'
  }
});
