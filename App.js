import React, { Component } from 'react';
import GeneralStatusBarColor from './src/Components/Styles/GeneralStatusBarColor';
import { View } from 'react-native';
export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GeneralStatusBarColor backgroundColor="#7CABCC"
          barStyle="light-content" />
      </View>
    );
  }
}