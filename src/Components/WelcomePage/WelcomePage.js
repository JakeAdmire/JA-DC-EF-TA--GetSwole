import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';
import { ThemeProvider, Button } from 'react-native-elements';
import { addUser } from '../../Actions';
import { connect } from 'react-redux';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const theme = {
  colors: {
    primary: '#D3E2EB',
  },
  Button: {
    titleStyle: {
      color: 'black',
    },
  }
}

class WelcomePage extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    }
  }

  handleChange = (name) => {
    this.setState({ userName: name })
  }

  handleSave = () => {
    const { userName } = this.state;
    this.props.addNewUser(userName);
    this.props.navigation.navigate('homePage');
  }

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.background}>
          <View>
            <View style={styles.headerText}>
              <Text style={styles.headerTextOne}>Welcome to</Text>
              <Text style={styles.headerTextTwo}>Get<Text style={styles.headerTextThree}>Swole</Text></Text>
              <Text style={styles.headerTextFour}>What should we call you?</Text>
            </View>
            <TextInput style={styles.textBox} onChangeText={(name) => this.handleChange(name)} placeholder=' ex. Chad...' />
            <ThemeProvider theme={theme}>
              <Button title="Let's get started" raised={true} onPress={this.handleSave} />
            </ThemeProvider>
          </View>
        </View>
      </DismissKeyboard>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addNewUser: (name) => dispatch(addUser(name))
});

export default connect(null, mapDispatchToProps)(WelcomePage);

const styles = StyleSheet.create({
  headerText: {
    marginTop: -100
  },
  background: {
    alignItems: 'center',
    paddingTop: 200,
    backgroundColor: '#7CABCC',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  headerTextOne: {
    color: '#D3E2EB',
    fontSize: 30,
    marginLeft: -12
  },
  headerTextTwo: {
    color: '#ffffff',
    fontSize: 70,
    marginTop: -10,
    marginBottom: 150
  },
  headerTextThree: {
    color: '#D3E2EB',
  },
  headerTextFour: {
    fontSize: 20,
    color: '#D3E2EB',
    marginBottom: -15
  },
  textBox: {
    backgroundColor: '#ffffff',
    height: 40,
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  }
});