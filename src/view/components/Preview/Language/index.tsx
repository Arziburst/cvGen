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
import { ThemeType } from '../../../../assets/themes/type';
import { FieldBlockState  } from '../../../../bus/client/fields/types';

type PropTypes = {
    languages: FieldBlockState;
    theme: ThemeType;
}

export const PreviewLanguage = ({ languages, theme }: PropTypes) => {
    if (languages) {
        return (
            <View style = { styles.section }>
                <PdfGenTitle
                    deccorElemColor = { theme.main.bgSecond }
                    text = 'Languages'
                    titleColor = { theme.main.color }

                />
                <ul style = { styles.list }>
                    {
                        languages.items.map(({ id, text }) => {
                            return (
                                <li
                                    key = { id }
                                    style = { styles.item }>
                                    <Text
                                        break
                                        wrap
                                        style = { [
                                            styles.text, {
                                                color:           theme.main.color,
                                                backgroundColor: theme.accent.bgPrimary,
                                                padding:         '5px 3px',
                                            },
                                        ] }>
                                        {text}
                                    </Text>
                                </li>
                            );
                        })
                    }
                </ul>
            </View>
        );
    }

    return null;
};
