import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Homepage extends React.Component {

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    
    return (
      <View style={styles.container}>
        <Text>Hello {name}</Text>
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