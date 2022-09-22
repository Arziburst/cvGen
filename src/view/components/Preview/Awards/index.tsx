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

    list: {

    },

    item: {
        marginBottom: 5,
    },

    received: {
        fontWeight:   500,
        fontSize:     9,
        marginBottom: 3,
    },

    date: {
        fontSize:     9,
        marginBottom: 2,
    },

    location: {
        fontSize: 9,
    },
});

// Types
import { Award } from '../../../../bus/client/awardFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    awards: Array<Award>;
    theme: ThemeType;
}

export const PreviewAwards = ({ awards, theme }: PropTypes) => {
    return (
        <View style = { styles.section }>
            <PdfGenTitle text = 'Awards' />
            <ul style = { styles.list }>
                {
                    awards.map((award) => {
                        return (
                            <li
                                key = { award.id }
                                style = { styles.item }>
                                <Text
                                    break
                                    wrap
                                    style = { [ styles.received, { color: theme.main.color }] }>
                                    {award.received}
                                </Text>
                                <Text
                                    break
                                    wrap
                                    style = { [ styles.date, { color: theme.main.color }] }>
                                    {award.date}
                                </Text>
                                <Text
                                    break
                                    wrap
                                    style = { [ styles.date, { color: theme.main.color }] }>
                                    {award.location}
                                </Text>
                            </li>
                        );
                    })
                }
            </ul>
        </View>
    );
};
