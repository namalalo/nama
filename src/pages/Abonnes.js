
import React, { Component } from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import { Header, Right, Body, Title, Left, Icon, Button } from 'native-base';
import {ListItem, Divider} from 'react-native-elements';
import Text from '../components/Text';
import Block from '../components/Block';

import * as firebase from 'react-native-firebase';

export default class Abonnes extends Component {
  constructor(props) {
    //this.itemsRef = firebase.database().ref('Abonnes');
    super(props);
    this.state = {
      isLoading: false,
      abonnes: []
    }
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={() => navigation.goBack(null)}>
            <Icon name="md-arrow-round-back" size={30} color={'#fff'} />
          </Button>
        </Left>
        <Body style={styles.body}>
          <Title style={styles.textHeader}>Mes Abonnés</Title>
        </Body>
        <Right />
      </Header>
    )
  });


  /*listenForItems(itemsRef) {
    this.itemsRef = firebase.database().ref('Abonnes');
    itemsRef.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          name: child.val().name,
          cni: child.val().cni,
          phone: child.val().phone,
          password: child.val().password,
        });
      });
  
      this.setState({abonnes: items });
    });
  }*/

  readUserData () { 
    firebase.database().ref ('Abonnes/').on('value', function(snapshot) { 
        alert(snapshot.val ()) 
    }); 
}

  keyExtractor = (item) => item.id;

  renderItem = ({item}) =>
  <View >
    <Text>{item.name}, {item.cni}</Text>   
    <Text>{item.phone}, {item.password}</Text>
  </View>;

  render() {
    return (
      <View>
       <Block middle center >
              <Text center title bold style={styles.cnx}
                onPress={this.readUserData}>
                Mes abonnés
              </Text>
            </Block>
      </View>
    );
  }
}

// Feuille de style
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#004e52',
    fontWeight: 'bold',
    marginLeft: 20
  },

  cnx:{
    marginTop: 100
  },
  header: {
    backgroundColor: '#f1625d'
  },
  body: {
    alignItems: 'center',
  },

  textHeader: {
    fontSize: 22
  }
})
