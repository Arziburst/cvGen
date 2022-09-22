// Core
import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        paddingBottom: 20,
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
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    education: Array<Education>;
    theme: ThemeType;
}

export const PreviewEducation = ({ education, theme }: PropTypes) => {
    console.log(theme);

    return (
        <View style = { [ styles.box, { color: theme.main.color }] }>
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
