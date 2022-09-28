// Core
import React from 'react';
import { Document, Page, StyleSheet, PDFViewer, View, Font } from '@react-pdf/renderer';

// Bus
import { useInfoFields } from '../../../bus/client/infoFields';
import { useContactField } from '../../../bus/client/contactFields';
import { useLanguageFields } from '../../../bus/client/languageFields';

// Components
import {
    PreviewAvatar,
    // PreviewAwards,
    PreviewContacts,
    PreviewInfo,
    PreviewLanguage,
    PreviewExperience,
} from '../../components';

// Assets
import NotoSans400 from '../../../assets/fonts/noto-sans-latin-400.ttf';
import NotoSans500 from '../../../assets/fonts/noto-sans-latin-500.ttf';
import NotoSans800 from '../../../assets/fonts/noto-sans-latin-800.ttf';
// import { useAwardFields } from '../../../bus/client/awardFields';
import { useExperienceFields } from '../../../bus/client/experienceFields';
import { PreviewEducation } from '../../components/Preview/Education';
import { useEducationField } from '../../../bus/client/educationFields';
import { PreviewSlills } from '../../components/Preview/Skills';
import { useSkillFields } from '../../../bus/client/skillFields';
import { useThemes } from '../../../bus/client/themes';

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
        width:   '30%',
        padding: '15px 20px',
    },
    wrapperSecondColumn: {
        width: '70%',
    },
    contentSecondColumn: {
        width:           '70%',
        padding:         '15px 20px',
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

export const PdfViewer = () => {
    const { infoFields } = useInfoFields();
    const { contactFields } = useContactField();
    const { languageFields } = useLanguageFields();
    // const { awardFields } = useAwardFields();
    const { experienceFields } = useExperienceFields();
    const { educationFields } = useEducationField();
    const { skillFields } = useSkillFields();

    const { themes } = useThemes();

    return (
        <PDFViewer
            style = {{ width: '100vw', height: '100%' }}>
            <Document>
                <Page
                    size = { 'A4' }
                    style = { styles.page }>
                    <View style = { styles.wrapper }>
                        <View style = { [ styles.firstColumn, { backgroundColor: themes.accent.bgSecond }] }>
                            <PreviewAvatar
                                avatar = { infoFields.avatar }
                                theme = { themes }
                            />
                        </View>
                        <View style = { [ styles.wrapperSecondColumn, { backgroundColor: themes.main.bgSecond }] }>
                            <PreviewInfo
                                name = { infoFields.name }
                                overview = { infoFields.overview }
                                position = { infoFields.position }
                                theme = { themes }
                            />
                        </View>
                    </View>
                    <View style = { styles.contentWrapper }>
                        <View style = { [ styles.firstColumn, { backgroundColor: themes.accent.bgSecond }] }>
                            <PreviewContacts
                                contacts = { contactFields }
                                theme = { themes }
                            />
                            <PreviewLanguage
                                languages = { languageFields }
                                theme = { themes }
                            />
                            {/* <PreviewAwards
                                awards = { awardFields }
                                theme = { themes }
                            /> */}
                        </View>
                        <View style = { [ styles.contentSecondColumn, { backgroundColor: themes.accent.avatar }] }>
                            <PreviewSlills
                                skills = { skillFields }
                                theme = { themes }
                            />
                            <PreviewEducation
                                education = { educationFields }
                                theme = { themes }
                            />
                            <PreviewExperience
                                experience = { experienceFields }
                                theme = { themes }
                            />
                        </View>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};
