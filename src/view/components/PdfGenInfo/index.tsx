// Core
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    section: {
        padding: '20px 30px',
    },
    name: {
        fontWeight:   800,
        fontSize:     '36px',
        color:        '#e8e5e4',
        marginBottom: '5px',
    },
    position: {
        textTransform: 'uppercase',
        color:         '#b0b1bb',
        marginBottom:  '10px',
    },
    overview: {
        fontSize:     '14px',
        color:        '#c7c9d3',
        marginBottom: '10px',
    },
});

// Types
type PropTypes = {
    firstName: string;
    lastName: string;
    position: string;
    overview: string;
}

export const PdfGenInfo = ({ firstName, lastName, position, overview }: PropTypes) => {
    return (
        <View style = { styles.section }>
            <Text style = { styles.name }>
                {firstName}
            </Text>
            <Text style = { styles.name }>
                {lastName}
            </Text>
            <Text style = { styles.position }>
                {position}
            </Text>
            <Text style = { styles.overview }>
                {overview}
            </Text>
        </View>
    );
};
