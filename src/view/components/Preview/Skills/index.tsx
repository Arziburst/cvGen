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
        fontSize: 12,
    },
    skillBox: {
        marginRight:     3,
        padding:         4,
        marginBottom:    3,
        fontSize:        12,
        backgroundColor: '#dbdbdb',
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

type PropTypes = {
    skills: Array<Skill>
}

export const PreviewSlills = ({ skills }: PropTypes) => {
    return (
        <View style = { styles.box }>
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
                                    style = { styles.skillBox }>
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
