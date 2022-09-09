// Core
import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        paddingBottom: 20,
        color:         '#4c576b',
    },
    text: {
        marginBottom: 3,
        fontSize:     12,
    },
});

// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { Education } from '../../../../bus/client/educationFields/types';

type PropTypes = {
    education: Array<Education>
}

export const PreviewEducation = ({ education }: PropTypes) => {
    return (
        <View style = { styles.box }>
            <PdfGenTitle text = 'Education'/>
            <ul>
                {
                    education.map(({
                        date, degree,
                        description, id,
                    }) => {
                        return (
                            <li key = { id }>
                                <Text style = { styles.text }>
                                    {date}
                                </Text>
                                <Text style = { styles.text }>
                                    {degree}
                                </Text>
                                <Text style = { styles.text }>
                                    {description}
                                </Text>
                            </li>
                        );
                    })
                }
            </ul>
        </View>
    );
};
