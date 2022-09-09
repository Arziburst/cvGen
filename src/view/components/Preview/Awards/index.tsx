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
        color:        '#4c576b',
        marginBottom: 3,
    },

    date: {
        fontSize:     9,
        color:        '#4c576b',
        marginBottom: 2,
    },

    location: {
        fontSize: 9,
        color:    '#4c576b',
    },
});

// Types
import { Award } from '../../../../bus/client/awardFields/types';

type PropTypes = {
    awards: Array<Award>;
}

export const PreviewAwards = ({ awards }: PropTypes) => {
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
                                    style = { styles.received }>
                                    {award.received}
                                </Text>
                                <Text
                                    break
                                    wrap
                                    style = { styles.date }>
                                    {award.date}
                                </Text>
                                <Text
                                    break
                                    wrap
                                    style = { styles.location }>
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
