// Core
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { ThemeType } from '../../../../assets/themes/type';
// import { useTheme } from 'styled-components';

// Styles
const styles = StyleSheet.create({
    section: {
        padding: '10px 20px',
    },
    name: {
        fontWeight:   800,
        fontSize:     30,
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
    theme: ThemeType;
}

export const PreviewInfo = ({ name, position, overview, theme }: PropTypes) => {
    console.log(theme);

    // const theme = useTheme();

    return (
        <View style = { styles.section }>
            <Text style = { [
                styles.name,
                // { color: theme.main.colorSecond },
            ] }>
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
