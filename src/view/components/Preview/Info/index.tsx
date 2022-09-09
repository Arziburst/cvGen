// Core
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    section: {
        padding: '10px 20px',
    },
    name: {
        fontWeight:   800,
        fontSize:     30,
        color:        '#e8e5e4',
        marginBottom: 3,
    },
    position: {
        textTransform: 'uppercase',
        color:         '#b0b1bb',
        marginBottom:  5,
    },
    overview: {
        fontSize: 10,
        color:    '#c7c9d3',
    },
});

// Types
type PropTypes = {
    name: string;
    position: string;
    overview: string;
}

export const PreviewInfo = ({ name, position, overview }: PropTypes) => {
    return (
        <View style = { styles.section }>
            <Text style = { styles.name }>
                {name}
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
