// Core
import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

// Styles
const styles = StyleSheet.create({
    box: {
        paddingBottom: 20,
        color:         '#4c576b',
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
        color:      '#4c576b',
        marginLeft: 4,
    },
    linkImg: {
        width:     13,
        height:    10,
        objectFit: 'contain',
    },
    subtitle: {
        fontSize:     14,
        color:        '#4c576b',
        marginBottom: 4,
        fontWeight:   800,
    },
    headerText: {
        flexDirection:  'row',
        justifyContent: 'space-between',
        fontSize:       12,
        fontWeight:     500,
        marginBottom:   2,
    },
    location: {
        fontSize:     12,
        fontWeight:   500,
        marginBottom: 3,
    },
    descriptionList: {
        marginBottom: 3,
    },
    descriptionDecor: {
        width:           7,
        height:          1,
        backgroundColor: '#4c576b',
        marginRight:     3,
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
        borderBottom:  '1px solid #4c576b',
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
});


// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { Experience } from '../../../../bus/client/experienceFields/types';

type PropTypes = {
    experience: Array<Experience>
}

export const PreviewExperience = ({ experience }: PropTypes) => {
    return (
        <View style = { styles.box }>
            <PdfGenTitle text = 'Experience'/>
            <ul>
                {
                    experience.map(({
                        date, descriptionList,
                        id, location,
                        position, projects,
                    }) => {
                        return (
                            <li key = { id }>
                                <View style = { styles.headerText }>
                                    <Text>
                                        {position}
                                    </Text>
                                    <Text>
                                        {date}
                                    </Text>
                                </View>
                                <Text style = { styles.location }>
                                    {location}
                                </Text>
                                <Text style = { styles.subtitle } >
                                    Description
                                </Text>
                                <ul style = { styles.descriptionList }>
                                    {descriptionList.map(({ description, id }) => (
                                        <li
                                            key = { id }
                                            style = { styles.descriptionItem }>
                                            <View style = { styles.descriptionDecor }></View>
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
                                            style = { styles.projectItem }>
                                            <Text style = { styles.projectText }>
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
