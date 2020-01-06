import React, {Component} from 'react';
import { StyleSheet} from 'react-native';

import Text from '../components/Text';
import Block from '../components/Block';

export default class Welcome extends Component{
    render(){
        return (
            <Block safe middle center>
                <Text h3 accent style={styles.sectionTitle}>Mot de passe</Text>
            </Block>
        );
    }
};

const styles =  StyleSheet.create({
    Container: {
        flex: 1
    }
})