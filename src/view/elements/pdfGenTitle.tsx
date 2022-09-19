// Core
import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems:    'center',
        position:      'relative',
    },
    decoreElem: {
        position:        'absolute',
        left:            -20,
        top:             7,
        height:          13,
        width:           13,
        backgroundColor: '#4c576b',
    },
    title: {
        fontSize:     19,
        color:        '#4c576b',
        marginBottom: 8,
        fontWeight:   800,
    },
});

type PropTypes = {
    text: string
}

export const PdfGenTitle = ({ text }: PropTypes) => {
    return (
        <View style = { styles.box }>
            <View style = { styles.decoreElem }></View>
            <Text style = { styles.title }>
                {text}
            </Text>
        </View>
    );
};
