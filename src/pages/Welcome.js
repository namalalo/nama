import React from 'react';
import { View, StyleSheet, TouchableOpacity, 
  Dimensions, Text } from 'react-native';


const { width: WIDTH } = Dimensions.get('window')

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bienvenue}>
          <Text style={styles.annonce}>Bienvenue dans PIMO SEND</Text>
          <Text style={styles.annonce}>Notre systeme de transfert de petites monnaies</Text>
          <Text style={styles.slogan}>Votre monnaie, notre souci</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text}>SE CONNECTER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Inscription')}>
            <Text style={styles.text}>CREER UN COMPTE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%'
  },
  bienvenue: {
    fontSize: 16,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '4%'
  },
  annonce: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00181f',
    marginTop: '2%',
    justifyContent: 'center'
  },
  slogan: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#04343a',
    marginTop: '3%',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f1625d',
    color: '#ffffff',
    borderRadius: 12,
    height: 42,
    padding: 10,
    marginTop: '5%'
  },
  btnContainer:{
    marginTop: '20%',
    width: WIDTH - 90,
    justifyContent: 'center',
    marginLeft: '11%'
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  },
  textIcon: {
    fontSize: 15,
    color: 'white'
  },
  header: {
    backgroundColor: '#FF9800'
  }
})