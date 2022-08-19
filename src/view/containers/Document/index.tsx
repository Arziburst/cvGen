// Core
import React/* , { FC } */ from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Header } from '../../components/Header';
import { Experience } from '../../components/Experience';
import { Skills } from '../../components/Skills';
// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        height:          '100%',
        padding:         '10px 15px',
    },
    section: {
        backgroundColor: '#fff',
    },
    name: {
        fontSize: '36px',
    },
});


const skills = [
    {
        name:   'Programing Language',
        skills: [ 'HTML5', 'CSS3', 'SASS', 'JS(ES6+/ESNext)' ],
    },
];

type fielsType = {
    name: string
    position: string
    overview: string
}

// Create Document Component
export const MyDocument = ({ name, position, overview }: fielsType) => (
    <Document>
        <Page style = { styles.page }>
            <Header
                name = { name }
                overview = { overview }
                position = { position }
            />
            <Skills
                skillsList = { skills }
                title = 'Skills'
            />
            <Experience />
            <View style = { styles.section }>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

