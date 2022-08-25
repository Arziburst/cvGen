// Core
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

// Elements
import { PdfGenTitle } from '../../elements/pdfGenTitle';

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
        fontSize:   8,
        color:      '#4c576b',
        marginLeft: 4,
    },
});

// Types
import { languagesItem } from '../../../bus/client/fields';

type PropTypes = {
    languages: Array<languagesItem>;
}

export const PdfGenLanguage = ({ languages }: PropTypes) => {
    return (
        <View style = { styles.section }>
            <PdfGenTitle text = 'Languages' />
            <ul style = { styles.list }>
                {languages?.map(({ id, language }) => {
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
                                style = { styles.text }>
                                {language}
                            </Text>
                        </li>
                    );
                })}
            </ul>
        </View>
    );
};
