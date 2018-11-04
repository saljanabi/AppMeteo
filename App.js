import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    isLoading: false
  };
  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
      <Text>Open up App.js to start working on your Weather app!</Text>
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  