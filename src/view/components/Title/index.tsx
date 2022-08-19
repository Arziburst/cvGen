import React, { FC } from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    title: {
        fontSize:      14,
        marginBottom:  10,
        textTransform: 'uppercase',
    },
});

// Types
type PropTypes = {
    titleText: string
}

export const Title: FC<PropTypes> = ({ titleText }) => <Text style = { styles.title }>{titleText}</Text>;
