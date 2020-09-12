import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  state = {
    name: 'Denisha',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome !!</Text>
        <Text style={styles.nameText}>{this.state.name}</Text>
        <TouchableOpacity style={styles.logOutbutton}>
          <Text style={styles.logOutText}>LOGOUT</Text>
        </TouchableOpacity>
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
  welcomeText: {
    fontSize: 25,
  },
  nameText: {
    fontSize: 20,
  },
  logOutbutton: {
    width: '70%',
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  logOutText: {
    color: 'white',
  },
});
