import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import Calendar from '../Calendar/Calendar';
import Dimensions from 'Dimensions';
import Container from '../Container/Container'


class Homepage extends React.Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };

  render() {

    return (
      <View style={styles.container}>
        <Text>Hello, {this.props.name}</Text>
        <Text>Select a day to view it's routines!</Text>
        <Calendar/>
        <Container />
      </View>
    );
  }
}

export const mapStateToProps = (state) => ({
  name: state.user
});

export default connect(mapStateToProps)(Homepage);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7CABCC',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});