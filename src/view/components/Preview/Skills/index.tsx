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
        flexWrap:      'wrap',
    },
});

// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { Skill } from '../../../../bus/client/skillFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    skills: Array<Skill>;
    theme: ThemeType;
}

export const PreviewSlills = ({ skills, theme }: PropTypes) => {
    return (
        <View style = { [ styles.box, { color: theme.main.color }] }>
            <PdfGenTitle text = 'Skills'/>
            <ul style = { styles.skillsList }>
                {
                    skills.map(({
                        id, skill,
                    }) => {
                        if (skill.length > 0) {
                            return (
                                <li
                                    key = { id }
                                    style = {{ ...styles.skillBox, backgroundColor: theme.accent.bg }}>
                                    <Text style = { styles.text }>
                                        {skill}
                                    </Text>
                                </li>
                            );
                        }

                        return null;
                    })
                }
            </ul>
        </View>
    );
};
