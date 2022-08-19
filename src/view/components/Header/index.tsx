// Core
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React, { FC } from 'react';

const styles = StyleSheet.create({
    container: {
        flexDirection:     'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems:        'stretch',
        paddingBottom:     '2px',
    },
    detailColumn: {
        flexDirection: 'column',
        flexGrow:      9,
    },
    linkColumn: {
        flexDirection: 'column',
        flexGrow:      2,
        alignSelf:     'flex-end',
        justifySelf:   'flex-end',
    },
    name: {
        fontSize:     24,
        marginBottom: '1px',
    },
    subtitle: {
        fontSize:     12,
        justifySelf:  'flex-end',
        marginBottom: '4px',
    },
    overview: {
        fontSize:     12,
        justifySelf:  'flex-end',
        marginBottom: '2px',
    },
});

// Types
type PropTypes = {
    name: string
    position: string
    overview: string
}

export const Header: FC<PropTypes> = ({ name, position, overview }) => {
    return (
        <View style = { styles.container }>
            <View style = { styles.detailColumn }>
                <Text style = { styles.name }>{name}</Text>
                <Text style = { styles.subtitle }>{position}</Text>
                <Text style = { styles.overview }>
                    {overview}
                </Text>
            </View>
        </View>
    );
};
