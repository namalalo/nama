import React, { Component } from 'react';
import { StyleSheet, Text} from 'react-native';
import * as Theme from './Theme';

export default class Typography extends Component{
    render(){
        const {
            h1,
            h2,
            h3,
            title,
            body,
            caption,
            small,
            size,
            // Styling
            bold,
            semibold,
            light,
            center,
            right,
            color,
            // Couleurs
            accent,
            primary,
            secndary,
            tertiary,
            black,
            white,
            gray,
            gray2,
            style,
            children,
            ...props
        }= this.props;

        const textStyles= [
            styles.text,
            h1 && styles.h1,
            h2 && styles.h2,
            h3 && styles.h3,
            title && styles.title,
            body && styles.body,
            caption && styles.caption,
            small && styles.small,
            size && {fontSize: size},
            // Styling
            bold && styles.bold,
            semibold && styles.semibold,
            light && styles.light,
            center && styles.center,
            right && styles.right,
            color && styles[color],
            color && !styles[color] && {color},
            // Couleurs
            accent && styles.accent,
            primary && styles.primary,
            secndary && styles.secndary,
            tertiary && styles.tertiary,
            black && styles.black,
            white && styles.white,
            gray && styles.gray,
            gray2 && styles.gray2,
            style,
        ];
        
        return(
            <Text style={textStyles} {...props}>
             {children}
            </Text>
        ) ;
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: Theme.sizes.font,
        color: Theme.colors.black,
    },
    bold: {
        fontWeight: "bold",
    },
    semibold: {
        fontWeight: "500",
    },
    light:{
        fontWeight: "200",
    },
    center:{
       textAlign: "center" ,
    },
    right: {
        textAlign: "right",
    },
    accent:{ color: Theme.colors.accent},
    primary:{ color: Theme.colors.primary},
    secondary:{ color: Theme.colors.secondary},
    tertiary:{ color: Theme.colors.tertiary},
    black:{ color: Theme.colors.black},
    white:{ color: Theme.colors.white},
    gray:{ color: Theme.colors.gray},
    gray2:{ color: Theme.colors.gray2},

    h1: Theme.fonts.h1,
    h2: Theme.fonts.h2,
    h3: Theme.fonts.h3,
    title: Theme.fonts.title,
    body: Theme.fonts.body,
    caption: Theme.fonts.caption,
    small: Theme.fonts.small,
    size: Theme.fonts.size,
});