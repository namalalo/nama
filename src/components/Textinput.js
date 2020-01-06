/*Compsant Text*/
import React from 'react';
import { View, TextInput } from 'react-native';

const Textinput = props => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
        borderRadius: 15
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#007FFF"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        onSubmitEditing={props.onSubmitEditing}
        secureTextEntry={props.secureTextEntry}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Textinput;