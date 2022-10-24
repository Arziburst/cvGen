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
        fontSize:     25,
        marginBottom: 3,
        padding:      '5px 3px',
    },
    position: {
        textTransform: 'uppercase',
        marginBottom:  5,
        padding:       '5px 3px',
    },
    overview: {
        fontSize: 10,
        padding:  '5px 3px',
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
                {
                    color:           theme.main.colorSecond,
                    backgroundColor: name.length > 0 ? theme.main.bg : '',
                },
            ] }>
                {name}
            </Text>
            <Text style = { [
                styles.position, {
                    color:           theme.main.colorSecond,
                    backgroundColor: position.length > 0 ? theme.main.bg : '',
                },
            ] }>
                {position}
            </Text>
            <Text style = { [
                styles.overview, {
                    color:           theme.main.colorSecond,
                    backgroundColor: overview.length > 0 ? theme.main.bg : '',
                },
            ] }>
                {overview}
            </Text>
        </View>
    );
};
