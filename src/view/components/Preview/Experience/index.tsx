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
        fontSize:   14,
        fontWeight: 800,
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
        width:    '100%',
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
    descrBox: {
        flexDirection: 'row',
        alignItems:    'center',
        marginBottom:  4,
    },
    descriptionDecorElem: {
        width:        9,
        height:       9,
        borderRadius: '50%',
        marginRight:  4,
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
                                <Text style = {{ marginBottom: 2 }}>
                                    Position / Date:
                                </Text>
                                <View style = { [ styles.headerText, { color: theme.main.color }] }>
                                    <Text style = {{
                                        backgroundColor: theme.accent.bgSecond,
                                        padding:         '5px 3px',
                                        width:           '100%',
                                        marginRight:     3,
                                    }}>
                                        {position}
                                    </Text>
                                    <Text style = { [
                                        styles.headerDateText, {
                                            backgroundColor: theme.accent.bgSecond,
                                            padding:         '5px 3px',
                                        },
                                    ] }>
                                        {date}
                                    </Text>
                                </View>
                                <Text style = {{ marginBottom: 2 }}>
                                    Company & Location:
                                </Text>
                                <Text style = { [
                                    styles.location, {
                                        backgroundColor: theme.accent.bgSecond,
                                        padding:         '5px 3px',
                                    },
                                ] }>
                                    {location}
                                </Text>
                                <View style = { styles.descrBox }>
                                    <View style = { [
                                        styles.descriptionDecorElem,
                                        { backgroundColor: theme.main.bgSecond },
                                    ] }
                                    />
                                    <Text style = { [ styles.subtitle, { color: theme.main.color }] } >
                                        Description
                                    </Text>
                                </View>
                                <ul style = { styles.descriptionList }>
                                    {descriptionList.map(({ description, id }) => (
                                        <li
                                            key = { id }
                                            style = {{
                                                ...styles.descriptionItem,
                                                backgroundColor: theme.accent.bgSecond,
                                                padding:         '5px 3px',
                                            }}>
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
                                <View style = { styles.descrBox }>
                                    <View style = { [
                                        styles.descriptionDecorElem,
                                        { backgroundColor: theme.main.bgSecond },
                                    ] }
                                    />
                                    <Text style = { [ styles.subtitle, { color: theme.main.color }] } >
                                        Projects
                                    </Text>
                                </View>
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
                                            <Text style = {{ marginBottom: 2 }}>
                                                Name:
                                            </Text>
                                            <Text style = { [
                                                styles.projectName, {
                                                    backgroundColor: theme.accent.bgSecond,
                                                    padding:         '5px 3px',
                                                },
                                            ] }>
                                                {name}
                                            </Text>
                                            <Text style = {{ marginBottom: 2 }}>
                                                Customer:
                                            </Text>
                                            <Text style = { [
                                                styles.projectText, {
                                                    backgroundColor: theme.accent.bgSecond,
                                                    padding:         '5px 3px',
                                                },
                                            ] }>
                                                {customer}
                                            </Text>
                                            <Text style = {{ marginBottom: 2 }}>
                                                Role / Duration:
                                            </Text>
                                            <View style = { styles.projectBox }>
                                                <Text style = {{
                                                    backgroundColor: theme.accent.bgSecond,
                                                    padding:         '5px 3px',
                                                    marginRight:     3,
                                                    width:           '100%',
                                                }}>
                                                    {role}
                                                </Text>
                                                <Text style = {{
                                                    backgroundColor: theme.accent.bgSecond,
                                                    padding:         '5px 3px',
                                                    width:           '100%',
                                                }}>
                                                    {duration}
                                                </Text>
                                            </View>
                                            <Text style = {{ marginBottom: 2 }}>
                                                Responsibilities:
                                            </Text>
                                            <Text style = {{
                                                ...styles.projectText,
                                                backgroundColor: theme.accent.bgSecond,
                                                padding:         '5px 3px',
                                            }}>
                                                {responsibilities}
                                            </Text>
                                            <Text style = {{ marginBottom: 2 }}>
                                                TeamSize:
                                            </Text>
                                            <Text style = {{
                                                ...styles.projectText,
                                                backgroundColor: theme.accent.bgSecond,
                                                padding:         '5px 3px',
                                            }}>
                                                {teamSize}
                                            </Text>
                                            <Text style = {{ marginBottom: 2 }}>
                                                Stack:
                                            </Text>
                                            <Text style = {{
                                                ...styles.projectText,
                                                backgroundColor: theme.accent.bgSecond,
                                                padding:         '5px 3px',
                                            }}>
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
