// Core
import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        paddingBottom: 20,
    },
    link: {
        flexDirection:  'row',
        alignItems:     'center',
        marginBottom:   5,
        textDecoration: 'none',
    },
    linkText: {
        fontWeight: 500,
        fontSize:   8,
        marginLeft: 4,
    },
    linkImg: {
        width:     13,
        height:    10,
        objectFit: 'contain',
    },
    subtitle: {
        fontSize:     14,
        marginBottom: 4,
        fontWeight:   800,
    },
    headerText: {
        flexDirection:  'row',
        justifyContent: 'space-between',
        fontSize:       15,
        fontWeight:     500,
        marginBottom:   2,
    },
    headerDateText: {
        fontSize: 12,
    },
    location: {
        fontSize:     12,
        fontWeight:   500,
        marginBottom: 6,
    },
    descriptionList: {
        marginBottom: 3,
    },
    descriptionDecor: {
        width:       7,
        height:      1,
        marginRight: 3,
    },
    descriptionItem: {
        flexDirection: 'row',
        alignItems:    'center',
        marginBottom:  3,
        fontSize:      12,
    },
    descriptionText: {
    },
    projectItem: {
        marginBottom:  5,
        fontSize:      12,
        paddingBottom: 2,
    },
    projectBox: {
        flexDirection:  'row',
        justifyContent: 'space-between',
        marginBottom:   2,
    },
    name: {
    },
    projectText: {
        marginBottom: 2,
    },

    projectName: {
        fontWeight: 500,
    },
});


// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { Experience } from '../../../../bus/client/experienceFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    experience: Array<Experience>;
    theme: ThemeType;
}

export const PreviewExperience = ({ experience, theme }: PropTypes) => {
    return (
        <View style = { [ styles.box, { color: theme.main.color }] }>
            <PdfGenTitle
                deccorElemColor = { theme.main.bgSecond }
                text = 'Experience'
                titleColor = { theme.main.color }

            />
            <ul>
                {
                    experience.map(({
                        date, descriptionList,
                        id, location,
                        position, projects,
                    }) => {
                        return (
                            <li key = { id }>
                                <View style = { [ styles.headerText, { color: theme.main.color }] }>
                                    <Text>
                                        {position}
                                    </Text>
                                    <Text style = { styles.headerDateText }>
                                        {date}
                                    </Text>
                                </View>
                                <Text style = { styles.location }>
                                    {location}
                                </Text>
                                <Text style = { [ styles.subtitle, { color: theme.main.color }] } >
                                    Description
                                </Text>
                                <ul style = { styles.descriptionList }>
                                    {descriptionList.map(({ description, id }) => (
                                        <li
                                            key = { id }
                                            style = { styles.descriptionItem }>
                                            <View style = { [
                                                styles.descriptionDecor,
                                                { backgroundColor: theme.main.color },
                                            ]
                                            }>
                                            </View>
                                            <Text style = { styles.descriptionText }>
                                                {description}
                                            </Text>
                                        </li>
                                    ))}
                                </ul>
                                <Text style = { styles.subtitle }>
                                    Projects
                                </Text>
                                <ul>
                                    {projects.map(({
                                        customer,  duration, id,
                                        name, responsibilities,
                                        role, stack,
                                        teamSize,
                                    }) => (
                                        <li
                                            key = { id }
                                            style = {{
                                                ...styles.projectItem,
                                                borderBottom: `1px solid ${theme.main.color}`,
                                            }}>
                                            <Text style = { styles.projectName }>
                                                {name}
                                            </Text>
                                            <Text style = { styles.projectText }>
                                                {customer}
                                            </Text>
                                            <View style = { styles.projectBox }>
                                                <Text>
                                                    {role}
                                                </Text>
                                                <Text>
                                                    {duration}
                                                </Text>
                                            </View>
                                            <Text style = { styles.projectText }>
                                                {responsibilities}
                                            </Text>
                                            <Text style = { styles.projectText }>
                                                {teamSize}
                                            </Text>
                                            <Text style = { styles.projectText }>
                                                {stack}
                                            </Text>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })
                }
            </ul>
        </View>
    );
};
