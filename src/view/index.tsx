// Core
import React/* , { FC } */ from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// import styled/* , { ThemeProvider } */ from 'styled-components';

// Routes
// import { Routes } from './routes';

// Hooks
// import { useTogglesRedux } from '../bus/client/toggles';

// Assets
// import { GlobalStyles, defaultTheme } from '../assets';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        height:          '100%',
    },
    section: {
        backgroundColor: '#fff',
    },
    nameee: {
        fontSize: '36px',
    },
});

type fielsType = {
    name: string
}
// Create Document Component
export const MyDocument = ({ name }: fielsType) => (
    <Document>
        <Page
            style = { styles.page }>
            <View style = { styles.section }>
                <Text style = { styles.nameee }>{name} </Text>
            </View>
            <View style = { styles.section }>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

