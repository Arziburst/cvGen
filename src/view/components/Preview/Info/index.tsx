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
        marginBottom:  5,
    },
    overview: {
        fontSize: 10,
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
    return (
        <View style = { styles.section }>
            <Text style = { [
                styles.name,
                { color: theme.main.colorSecond },
            ] }>
                {name}
            </Text>
            <Text style = { [ styles.position, { color: theme.main.colorSecond }] }>
                {position}
            </Text>
            <Text style = { [ styles.overview, { color: theme.main.colorSecond }] }>
                {overview}
            </Text>
        </View>
    );
};
