// Core
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Styles
const styles = StyleSheet.create({
    section: {
        paddingBottom: 20,
    },
    title: {

    },
    list: {

    },
    item: {
        marginBottom: 5,
    },
    text: {
        fontWeight: 500,
        fontSize:   9,
        marginLeft: 4,
    },
});

// Types
import { Language } from '../../../../bus/client/languageFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    languages: Array<Language>;
    theme: ThemeType;
}

export const PreviewLanguage = ({ languages, theme }: PropTypes) => {
    return (
        <View style = { styles.section }>
            <PdfGenTitle text = 'Languages' />
            <ul style = { styles.list }>
                {
                    languages?.map(({ id, language }) => {
                        if (language.length === 0) {
                            return null;
                        }

                        return (
                            <li
                                key = { id }
                                style = { styles.item }>
                                <Text
                                    break
                                    wrap
                                    style = { [ styles.text, { color: theme.main.color }] }>
                                    {language}
                                </Text>
                            </li>
                        );
                    })
                }
            </ul>
        </View>
    );
};
