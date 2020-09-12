import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {loginActions} from '../actions';
import {connect} from 'react-redux';
import {LOGIN_FAIL, LOGIN_SUCCESS} from '../actions/types';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loginSuccess: this.props.loginSuccessValue,
    duringActions: this.props.duringActions,
    // navigation: this.props.navigation,
  };

  constructor(props) {
    super(props);
    console.log('navigation', this.props.navigation);
  }

  callLogin = () => {
    const data = {
      username: this.state.email,
      password: this.state.password,
      loginSuccess: this.state.loginSuccess,
    };
    this.props.loginToApp(data);
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    if (props.duringActions === LOGIN_SUCCESS) {
      props.navigation.navigate('Home');

      console.log('login success');
    } else if (props.duringActions === LOGIN_FAIL) {
      alert('Please enter valid vredentials');
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="black"
            onChangeText={(text) => this.setState({email: text})}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="black"
            onChangeText={(text) => this.setState({password: text})}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.callLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginToApp: (data) => dispatch(loginActions(data)),
});

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    loginSuccess: state.loginData.loginSuccessValue,
    duringActions: state.loginData.duringActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    color: 'black',
  },
  inputText: {
    height: 50,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    height: 50,
    color: 'white',
  },
});
