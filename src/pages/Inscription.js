import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, Button, Alert,
  KeyboardAvoidingView, ToastAndroid
} from 'react-native';

import { Header, Right, Body, Title } from 'native-base';

import Text from '../components/Text';
import Block from '../components/Block';
import TextInput from '../components/Textinput';

import firebase from 'react-native-firebase';

export default class Inscription extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cni: '',
      phone: '',
      password: '',
      showPass: true,
      press: false
    }
  };

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  };

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={styles.header}>
        <Body style={styles.body}>
          <Title style={styles.textHeader}>Inscription</Title>
        </Body>
        <Right />
      </Header>
    )
  });

  validationName(text) {
    this.setState({
      name: text.replace(/[^A-Za-z]/g, ' '),
    });
  };

  validationCNI(text) {
    this.setState({
      cni: text.replace(/[^0-9]/g, ' '),     
    });
  };

  /*validationPhone(text) {
    this.setState({
      contact: text.replace(/[^0-9]/g, ' '),
    });
  };*/

  /*onRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert('Incription réussie')
      }).catch((error) => {
        alert('Echec incription')
      })
  }*/

  writeUserData  = () => { 
    const{ name, cni, phone, password} = this.state ;
    firebase.database ().ref('Abonnes/').push({ 
        name,
        cni,
        phone, 
        password
    }). then(() => { 
        // success callback 
        alert('Données inserées'); 
        this.setState({
          name: '',
          cni: '',
          phone: '',
          password: '',
        });
        this.props.navigation.navigate('Welcome');
    }). catch((error) => { 
        // error callback 
        alert('Echec') 
    }) 
};

  render() {
    return (
      <Block safe backgroundColor="#f5fcd6">
        <ScrollView keyboardShouldPersistTaps="handled">
          <Block centr bottom >
            <Text title semibold center style={styles.sousTitre}>Veuillez entrer vos informations</Text>
          </Block>
          <KeyboardAvoidingView>
            <Block style={styles.inputContainer}>
              <TextInput
                placeholder=" Nom complet "
                onChangeText={name => this.validationName(name)}
                value={this.state.name}
                style={styles.input}
              />
              <TextInput
                placeholder="CNI"
                onChangeText={cni => this.validationCNI(cni)}
                value={this.state.cni}
                maxLength={13}
                // keyboardType="numeric"
                style={styles.input}
              />
              <TextInput
                placeholder=" Téléphone "
                onChangeText={phone => this.setState({ phone })}
                // value={this.state.contact}
                maxLength={15}
                // keyboardType="email-address"
                style={styles.input}
              />
              <TextInput
                placeholder=" Mot de passe"
                onChangeText={password => this.setState({ password })}
                maxLength={10}
                secureTextEntry={this.state.showPass}
                style={styles.input}
              />
            </Block>
            <Block flex={false} margin={55} marginTop={22}>
              <Button
                title=" CREER UN COMPTE "
                onPress={this.writeUserData}
              />
            </Block>
            <Block middle center >
              <Text center title bold style={styles.cnx}
                onPress={() => this.props.navigation.navigate('Abonnes')}>
                Mes abonnés
              </Text>
            </Block>
          </KeyboardAvoidingView>
        </ScrollView>
      </Block >
    );
  }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#031635'
  },
  sousTitre: {
    marginTop: 45
  },
  logo: {
    marginTop: 30,
    marginLeft: 160,
    width: 60,
    height: 60
  },
  input: {
    padding: 8,
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20
  },
  cnx: {
    marginBottom: 60,
    color: '#094c86'
  },
  header: {
    backgroundColor: '#ee1a36'
  },
  body: {
    alignItems: 'center',
    marginLeft: '10%'
  },
  textHeader: {
    fontSize: 24,
  },
  IconPerson: {
    position: 'absolute',
    top: 20,
    left: 44
  },
  IconCNI: {
    position: 'absolute',
    top: 78,
    left: 44
  },
  IconPhone: {
    position: 'absolute',
    top: 132,
    left: 44
  },
  IconPasse: {
    position: 'absolute',
    top: 188,
    left: 42
  },
  btnEye: {
    position: 'absolute',
    top: 188,
    right: 42
  },
});

