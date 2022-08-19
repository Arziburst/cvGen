/* eslint-disable react/no-array-index-key */

import React, { FC } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Title } from '../Title';
import { List } from '../List';
import { Item } from '../Item';

const styles = StyleSheet.create({
    container: {
        flex:                    1,
        paddingTop:              30,
        paddingLeft:             15,
        '@media max-width: 400': {
            paddingTop:  10,
            paddingLeft: 0,
        },
    },
    entryContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 11,
    },
    // detailContainer: {
    //     flexDirection: 'row',
    // },
    detailLeftColumn: {
        flexDirection: 'column',
        marginLeft:    10,
        marginRight:   10,
    },
    detailRightColumn: {
        flexDirection: 'column',
        flexGrow:      9,
    },
    bulletPoint: {
        fontSize: 10,
    },
    details: {
        fontSize: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        marginBottom:  10,
    },
    leftColumn: {
        flexDirection: 'column',
        flexGrow:      9,
    },
    rightColumn: {
        flexDirection: 'column',
        flexGrow:      1,
        alignItems:    'flex-end',
        justifySelf:   'flex-end',
    },
    title: {
        fontSize:       11,
        color:          'black',
        textDecoration: 'none',
    },
});

type propTypes = {
    company: string
    details: Array<string>
    position: string
    date: string
}

const ExperienceEntry = ({ company, details, position, date }: propTypes) => {
    const title = `${company} | ${position}`;

    return (
        <View style = { styles.entryContainer }>
            <View style = { styles.headerContainer }>
                <View style = { styles.leftColumn }>
                    <Text style = { styles.title }>{title}</Text>
                </View>
                <View style = { styles.rightColumn }>
                    <Text style = { styles.date }>{date}</Text>
                </View>
            </View>
            <List>
                {details.map((detail, i) => (
                    <Item
                        key = { i }>
                        {detail}
                    </Item>
                ))}
            </List>
        </View>
    );
};

const experienceData = [
    {
        company: 'Norway',
        date:    '6 mounth (August 2020 - January2021)',
        details: [
            'Create web-application.',
            'Ensure stable performance of the system while enabling smooth display of heavyweight interactive educational games and lessons',
        ],
        position: 'Front-end Developer',
    },
    {
        company: 'Rebel Alliance',
        date:    'A long time ago...',
        details: [
            'Lead legions of troops into battle while demonstrating bravery, competence and honor',
            'Created complicated battle plans in conjunction with other Rebel leaders in order to ensure the greatest chance of success',
            'Defeated Darth Vader in single-combat, and convinced him to betray his mentor, the Emperor',
        ],
        position: 'General',
    },
];

export const Experience: FC = () => (
    <View style = { styles.container }>
        <Title titleText = 'Experience' />
        {experienceData.map(({ company, date, details, position }) => (
            <ExperienceEntry
                company = { company }
                date = { date }
                details = { details }
                key = { company + position }
                position = { position }
            />
        ))}
    </View>
);
