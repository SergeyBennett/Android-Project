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
      paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
      alignContent:'stretch'
  }
});
