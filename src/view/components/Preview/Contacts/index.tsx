/* eslint-disable no-nested-ternary */
// Core
import React from 'react';
import { View, StyleSheet, Text, Link } from '@react-pdf/renderer';

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
        fontSize:   9,
        marginLeft: 4,
    },
    linkImg: {
        width:     13,
        height:    10,
        objectFit: 'contain',
    },
});

// Elements
import { PdfGenTitle } from '../../../elements/pdfGenTitle';
import { GithubIcon, HomeIcon, LinkedinIcon, MailIcon, PhoneIcon  } from '../../../elements/pdfGenIcons';
// Types
import { Contact } from '../../../../bus/client/contactFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    contacts: Array<Contact>;
    theme: ThemeType;
}

export const PreviewContacts = ({ contacts, theme }: PropTypes) => {
    // const getIcon = (type: string): JSXElementConstructor<any> => {
    //     if (type === 'mail') {
    //         return <MailIcon color = { theme.main.color }/>;
    //     } else if (type === 'phone') {
    //         iconUrl = pngPhoneIcon;
    //     } else if (type === 'address') {
    //         iconUrl = pngHomeIcon;
    //     } else if (type === 'Linkedin') {
    //         iconUrl = pngLinkedinIcon;
    //     } else if (type === 'Github') {
    //         iconUrl = pngGithubIcon;
    //     }
    // };

    return (
        <View style = { styles.box }>
            <PdfGenTitle
                deccorElemColor = { theme.main.bgSecond }
                text = 'Contacts'
                titleColor = { theme.main.color }

            />
            <ul>
                {
                    contacts?.map(({ id, url }) => {
                        return (
                            <li key = { id }>
                                <Link
                                    break
                                    src = { url }
                                    style = { styles.link }>
                                    {
                                        id === 'mail'
                                            ? <MailIcon color = { theme.main.color } />
                                            : id === 'phone' ? <PhoneIcon color = { theme.main.color } />
                                                : id === 'address' ? <HomeIcon color = { theme.main.color } />
                                                    : id === 'Linkedin' ? <LinkedinIcon color = { theme.main.color } />
                                                        : id === 'Github' ? <GithubIcon color = { theme.main.color } />
                                                            : null
                                    }
                                    <Text
                                        break
                                        wrap
                                        style = { [ styles.linkText, { color: theme.main.color }] }>
                                        {id === 'Linkedin' ? id : url}
                                    </Text>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </View>
    );
};
