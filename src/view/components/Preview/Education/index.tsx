// Core
import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        paddingBottom: 15,
    },
    boxText: {
        marginBottom: 4,
    },
    text: {
        width:        '100%',
        fontSize:     12,
        marginBottom: 3,
    },
    AboutBoxText: {
        marginBottom: 1,
    },
});

// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { Education } from '../../../../bus/client/educationFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    education: Array<Education> | null;
    theme: ThemeType;
}

export const PreviewEducation = ({ education, theme }: PropTypes) => {
    if (education) {
        return (
            <View style = { [ styles.box, { color: theme.main.color }] }>
                <PdfGenTitle
                    deccorElemColor = { theme.main.bgSecond }
                    text = 'Education'
                    titleColor = { theme.main.color }
                />
                <ul>
                    {
                        education.map(({
                            date, degree,
                            description, id,
                        }) => {
                            return (
                                <li
                                    key = { id }
                                    style = {{
                                        marginBottom: 4,
                                    }}>
                                    {
                                        date
                                            ? (
                                                <View style = { styles.boxText }>
                                                    <Text style = { styles.AboutBoxText }>
                                                        Date:
                                                    </Text>
                                                    <Text style = { [
                                                        styles.text, {
                                                            backgroundColor: theme.accent.bgSecond,
                                                            padding:         '5px 3px',
                                                        },
                                                    ] }>
                                                        {date.text}
                                                    </Text>
                                                </View>
                                            ) : null
                                    }
                                    {
                                        degree
                                            ? (
                                                <View style = { styles.boxText }>
                                                    <Text style = { styles.AboutBoxText }>
                                                        Degree / Location:
                                                    </Text>
                                                    <Text style = { [
                                                        styles.text, {
                                                            backgroundColor: theme.accent.bgSecond,
                                                            padding:         '5px 3px',
                                                        },
                                                    ] }>
                                                        {degree.text}
                                                    </Text>
                                                </View>
                                            ) : null
                                    }
                                    {
                                        description
                                            ? (
                                                <View style = { styles.boxText }>
                                                    <Text style = { styles.AboutBoxText }>
                                                        About Degree:
                                                    </Text>
                                                    <Text style = { [
                                                        styles.text, {
                                                            backgroundColor: theme.accent.bgSecond,
                                                            padding:         '5px 3px',
                                                        },
                                                    ] }>
                                                        {description.text}
                                                    </Text>
                                                </View>
                                            ) : null
                                    }
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
