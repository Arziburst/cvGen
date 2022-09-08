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
    },
    descriptionItem: {
    },
    descriptionText: {
    },
    projectItem: {
    },
    name: {
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
                                            <Text style = { styles.name }>
                                                {name}
                                            </Text>
                                            <Text >
                                                {customer}
                                            </Text>
                                            <View>
                                                <Text>
                                                    {role}
                                                </Text>
                                                <Text>
                                                    {duration}
                                                </Text>
                                            </View>
                                            <Text>
                                                {responsibilities}
                                            </Text>
                                            <Text>
                                                {teamSize}
                                            </Text>
                                            <Text>
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
