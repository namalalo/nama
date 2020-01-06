
/*Composant Bouton*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Bouton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f1625d',
    color: '#ffffff',
    borderRadius: 12,
    height: 40,
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  },
});
export default Bouton;