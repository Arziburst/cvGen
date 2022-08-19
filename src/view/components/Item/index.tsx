// Core
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React, { FC } from 'react';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom:  5,
    },
    bulletPoint: {
        width:    10,
        fontSize: 10,
    },
    itemContent: {
        flex:     1,
        fontSize: 10,
    },
});

type PropTypes = {
    children: React.ReactNode;
}

export const Item: FC<PropTypes> = ({ children }) => (
    <View style = { styles.item }>
        <Text style = { styles.bulletPoint }>•</Text>
        <Text style = { styles.itemContent }>{children}</Text>
    </View>
);
