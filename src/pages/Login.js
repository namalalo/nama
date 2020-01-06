import React, { Component } from 'react';
import {
    StyleSheet, Button, ScrollView,
    KeyboardAvoidingView, Alert
} from 'react-native';
import { Header, Right, Body, Title } from 'native-base';

import Text from '../components/Text';
import Block from '../components/Block';
import TextInput from '../components/Textinput';
 
import firebase from 'react-native-firebase';

export default class Login extends Component {
    constructor() {
        super(); 
        this.state = {
            email: "",
            password: "",
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
                    <Title style={styles.textHeader}>Identification</Title>
                </Body>
                <Right />
            </Header>
        )
    });

    Login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Compte'))
            .catch((error) => { 
                alert('Identifiant non existant');
            })
    };

    render() {
        return (
            <Block safe backgroundColor="#f5fcd6">
                <ScrollView keyboardShouldPersistTaps="handled">

                    <Block centr bottom >
                        <Text title semibold center style={styles.sousTitre}>Veuillez entrer vos données d'accés</Text>
                    </Block>

                    <KeyboardAvoidingView>
                        <Block style={styles.inputContainer}>
                            <TextInput
                                placeholder=" Numero téléphone"
                                onChangeText={email=> this.setState({ email })}
                                maxLength={15}
                                keyboardType="email-address"
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
                        <Block flex={false} margin={56} marginTop={22}>
                            <Button
                                title=" SE CONNECTER"
                                onPress={this.Login}
                            />
                        </Block>
                        <Block middle center >
                            <Text center title bold style={styles.inscription}
                                onPress={() => this.props.navigation.navigate('Inscription')}>
                                Créer votre compte
                            </Text>
                        </Block> 
                        <Block middle center>
                            <Text center title bold style={styles.mdp}
                                onPress={() => this.props.navigation.navigate('Password')}>
                                Mot de passe oublié ?
                            </Text>
                        </Block>
                        <Block middle center >
                            <Text center title bold style={styles.bas}
                                onPress={() => this.props.navigation.navigate('Confidentialites')}>
                                Politiques de confidentialité
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
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20
    },
    mdp: {
        marginTop: 18,
        color: '#094c86'
    },
    inscription: {
        marginTop: 20,
        color: '#094c86'
    },
    bas: {
        marginTop: 75,
    },
    btnEye: {
        position: 'absolute',
        top: 78,
        right: 42
    },
    IconPasse: {
        position: 'absolute',
        top: 77,
        left: 42
    },
    IconPhone: {
        position: 'absolute',
        top: 21,
        left: 44
    },
    header: {
        backgroundColor: '#ee1a36'
    },
    body: {
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 24,
        marginLeft: '10%'
    },
})