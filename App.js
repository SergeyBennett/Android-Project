// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lists from "./src/Lists/Lists";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Lists/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      paddingTop: 20,
    backgroundColor: 'rgba(244, 244, 244,0.5)',
    justifyContent: 'flex-start',
      alignContent:'stretch'
  }
});
