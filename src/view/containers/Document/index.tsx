// Core
import React from 'react';
import { Document, Page, StyleSheet, PDFViewer, View, Font } from '@react-pdf/renderer';
import { useInfoFieldHooksRedux } from '../../../bus/client/infoFields';

import NotoSans400 from '../../../assets/fonts/noto-sans-latin-400.ttf';
import NotoSans500 from '../../../assets/fonts/noto-sans-latin-500.ttf';
import NotoSans800 from '../../../assets/fonts/noto-sans-latin-800.ttf';
import { CvAvatar } from '../../components/CvAvatar';
import { CvInfo } from '../../components/CvInfo';
import { CvContacts } from '../../components/CvContacts';
import { CvLanguage } from '../../components/CvLanguage';
import { useContactHooksRedux } from '../../../bus/client/contactFields';
import { useLanguageHooksRedux } from '../../../bus/client/languageFields';

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
    const { infoFieldsRedux } = useInfoFieldHooksRedux();
    const { contactFieldRedux } = useContactHooksRedux();
    const { languageFieldRedux } = useLanguageHooksRedux();

    return (
        <PDFViewer
            style = {{ width: '100vw', height: '100%' }}>
            <Document>
                <Page
                    size = { 'A4' }
                    style = { styles.page }>
                    <View style = { styles.wrapper }>
                        <View style = { styles.firstColumn }>
                            <CvAvatar avatar = { infoFieldsRedux.avatar } />
                        </View>
                        <View style = { styles.wrapperSecondColumn }>
                            <CvInfo
                                name = { infoFieldsRedux.name }
                                overview = { infoFieldsRedux.overview }
                                position = { infoFieldsRedux.position }
                            />
                        </View>
                    </View>
                    <View style = { styles.contentWrapper }>
                        <View style = { styles.firstColumn }>
                            <CvContacts contacts = { contactFieldRedux }/>
                            <CvLanguage languages = { languageFieldRedux }/>
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
