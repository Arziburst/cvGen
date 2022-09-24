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
        position: 'absolute',
        left:     -20,
        top:      7,
        height:   13,
        width:    13,
    },
    title: {
        fontSize:     19,
        marginBottom: 8,
        fontWeight:   800,
    },
});

type PropTypes = {
    text: string;
    deccorElemColor: string;
    titleColor: string;
}

export const PdfGenTitle = ({ text, deccorElemColor, titleColor }: PropTypes) => {
    return (
        <View style = { styles.box }>
            <View style = { [ styles.decoreElem, { backgroundColor: deccorElemColor }] }></View>
            <Text style = { [ styles.title, { color: titleColor }] }>
                {text}
            </Text>
        </View>
    );
};
