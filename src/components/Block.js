import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';

import * as Theme from './Theme';

export default class Block extends Component{
    render(){
        const {
            flex,
            row,
            column,
            center,
            middle,
            left,
            right,
            top,
            bottom,
            card,
            shadow,
            color,
            space,
            style,
            children,
            ...props
        } = this.props;

        const blockstyles = [
            styles.block,
            flex && {flex},
            flex === false && { flex: 0},
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            left && styles.left,
            right && styles.right,
            top && styles.top,
            bottom && styles.bottom,
            card && styles.card,
            shadow && styles.shadow,
            space && {justifyContent: "space-between" },
            color && styles[color],
            color && styles[color] && {background: color},
            style,
        ];

        return(
            <View style={blockstyles} {...props}>
             {children}
            </View>
        ) ;
    }
}

export const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    card: {
        borderRadius: Theme.sizes.border,
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    top: {
        justifyContent: 'flex-start',
    },
    bottom: {
        justifyContent: 'flex-end'
    },
    shadow: {
        shadowColor: Theme.colors.black,
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    accent: {backgroundColor: Theme.colors.accent},
    primary: {backgroundColor: Theme.colors.primary},
    secondary: {backgroundColor: Theme.colors.secondary},
    tertiary: {backgroundColor: Theme.colors.tertiary},
    black: {backgroundColor: Theme.colors.black},
    white: {backgroundColor: Theme.colors.white},
    gray: {backgroundColor: Theme.colors.gray},
    gray2: {backgroundColor: Theme.colors.gray2},
    gray3: {backgroundColor: Theme.colors.gray3},
    gray4: {backgroundColor: Theme.colors.gray4},
})