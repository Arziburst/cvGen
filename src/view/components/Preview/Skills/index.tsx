// Core
import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        paddingBottom: 20,
    },
    text: {
        fontSize: 12,
    },
    skillBox: {
        marginRight:  3,
        padding:      4,
        marginBottom: 3,
        fontSize:     12,
    },
    skillsList: {
        flexDirection: 'row',
        padding:       '8px 5px',
        flexWrap:      'wrap',
    },
});

// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { ThemeType } from '../../../../assets/themes/type';
import { FieldBlockState } from '../../../../bus/client/fields/types';

type PropTypes = {
    skills: FieldBlockState;
    theme: ThemeType;
}

export const PreviewSlills = ({ skills, theme }: PropTypes) => {
    if (skills) {
        return (
            <View style = { [ styles.box, { color: theme.main.color }] }>
                <PdfGenTitle
                    deccorElemColor = { theme.main.bgSecond }
                    text = 'Skills'
                    titleColor = { theme.main.color }

                />
                <ul style = {{
                    ...styles.skillsList, backgroundColor: theme.accent.bgSecond,
                }}>
                    {
                        skills.items.map(({
                            id, text,
                        }) => {
                            return (
                                <li
                                    key = { id }
                                    style = {{ ...styles.skillBox, backgroundColor: theme.accent.bg }}>
                                    <Text style = { styles.text }>
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
