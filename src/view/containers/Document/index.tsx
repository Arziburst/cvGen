// Core
import React from 'react';
import { Document, Page, StyleSheet, PDFViewer, View, Font } from '@react-pdf/renderer';
import { useFieldsRedux } from '../../../bus/client/fields';

import NotoSans400 from '../../../assets/fonts/noto-sans-latin-400.ttf';
import NotoSans500 from '../../../assets/fonts/noto-sans-latin-500.ttf';
import NotoSans800 from '../../../assets/fonts/noto-sans-latin-800.ttf';
import { PdfGenAvatar } from '../../components/PdfGenAvatar';
import { PdfGenInfo } from '../../components/PdfGenInfo';
import { PdfGenContacts } from '../../components/PdfGenContacts';

// Styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        width:           '100%',
        fontFamily:      'NotoSans',
        fontWeight:      400,
        fontSize:        '12px',
    },
    wrapper: {
        display:       'flex',
        flexDirection: 'row',
    },
    contentWrapper: {
        display:       'flex',
        flexDirection: 'row',
        flex:          '1 1 auto',
    },
    firstColumn: {
        backgroundColor: '#decabf',
        width:           '30%',
        padding:         '20px 30px',
    },
    wrapperSecondColumn: {
        width:           '70%',
        backgroundColor: '#4c576b',
    },
    contentSecondColumn: {
        width:           '70%',
        padding:         '20px 30px',
        backgroundColor: '#f5f5f5',
    },
});

Font.register(
    { family: 'NotoSans', fonts:  [
        { src: NotoSans400, fontStyle: 'normal', fontWeight: '400' },
        { src: NotoSans500, fontStyle: 'normal', fontWeight: '500' },
        { src: NotoSans800, fontStyle: 'normal', fontWeight: '800' },
    ]},
);

export const MyDocument = () => {
    const { fieldsRedux: { avatar, name, overview, position, contacts }} = useFieldsRedux();

    return (
        <PDFViewer
            style = {{ width: '100vw', height: '100%' }}>
            <Document>
                <Page
                    size = { 'A4' }
                    style = { styles.page }>
                    <View style = { styles.wrapper }>
                        <View style = { styles.firstColumn }>
                            <PdfGenAvatar avatar = { avatar } />
                        </View>
                        <View style = { styles.wrapperSecondColumn }>
                            <PdfGenInfo
                                name = { name }
                                overview = { overview }
                                position = { position }
                            />
                        </View>
                    </View>
                    <View style = { styles.contentWrapper }>
                        <View style = { styles.firstColumn }>
                            <PdfGenContacts contacts = { contacts }/>
                        </View>
                        <View style = { styles.contentSecondColumn }>
                            {/* // Content */}
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};
