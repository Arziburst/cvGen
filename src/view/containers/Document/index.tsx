// Core
import React from 'react';
import { Document, Page, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
import { Header } from '../../components/Header';
import { useFieldsRedux } from '../../../bus/client/fields';

// Styles
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


export const MyDocument = () => {
    const { fieldsRedux: { name, avatar, position, overview }} = useFieldsRedux();

    return (
        <PDFViewer
            showToolbar = { false }
            style = {{ width: '100%', height: '100vh' }}>
            <Document>
                <Page
                    style = { styles.page }>
                    <Header
                        name = { name }
                        overview = { overview }
                        position = { position }
                    />
                    <Image src = { avatar } />
                </Page>
            </Document>
        </PDFViewer>
    );
};

