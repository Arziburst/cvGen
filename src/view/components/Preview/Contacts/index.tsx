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
import { ThemeType } from '../../../../assets/themes/type';
import { Contacts } from '../../../../bus/client/contactFields/types';

type PropTypes = {
    contacts: Contacts | null;
    theme: ThemeType;
}

export const PreviewContacts = ({ contacts, theme }: PropTypes) => {
    if (contacts) {
        return (
            <View style = { styles.box }>
                <PdfGenTitle
                    deccorElemColor = { theme.main.bgSecond }
                    text = 'Contacts'
                    titleColor = { theme.main.color }

                />
                <ul>
                    <li>
                        <View
                            break
                            style = { [
                                styles.link, {
                                    backgroundColor: theme.accent.bgPrimary,
                                    padding:         '5px 3px',
                                },
                            ] }>
                            <HomeIcon color = { theme.main.color } />
                            <Text
                                break
                                wrap
                                style = { [ styles.linkText, { color: theme.main.color }] }>
                                {
                                    contacts.address.url
                                }
                            </Text>
                        </View>
                    </li>
                    <li>
                        <View
                            break
                            style = { [
                                styles.link, {
                                    backgroundColor: theme.accent.bgPrimary,
                                    padding:         '5px 3px',
                                },
                            ] }>
                            <MailIcon color = { theme.main.color } />
                            <Text
                                break
                                wrap
                                style = { [ styles.linkText, { color: theme.main.color }] }>
                                {
                                    contacts.mail.url
                                }
                            </Text>
                        </View>
                    </li>
                    {
                        contacts.phone
                            ? (
                                <li key = { contacts.phone.id }>
                                    <View
                                        break
                                        style = { [
                                            styles.link, {
                                                backgroundColor: theme.accent.bgPrimary,
                                                padding:         '5px 3px',
                                            },
                                        ] }>
                                        <PhoneIcon color = { theme.main.color } />
                                        <Text
                                            break
                                            wrap
                                            style = { [ styles.linkText, { color: theme.main.color }] }>
                                            {
                                                contacts.phone.url
                                            }
                                        </Text>
                                    </View>
                                </li>
                            ) : null
                    }
                    {
                        contacts.linkedin
                            ? (
                                <li>
                                    <Link
                                        break
                                        src = { contacts.linkedin.url }
                                        style = { [
                                            styles.link, {
                                                backgroundColor: theme.accent.bgPrimary,
                                                padding:         '5px 3px',
                                            },
                                        ] }>
                                        <LinkedinIcon color = { theme.main.color } />
                                        <Text
                                            break
                                            wrap
                                            style = { [ styles.linkText, { color: theme.main.color }] }>
                                            LinkedIn
                                        </Text>
                                    </Link>
                                </li>
                            ) : null
                    }
                    {
                        contacts.github
                            ? (
                                <li>
                                    <Link
                                        break
                                        src = { contacts.github.url }
                                        style = { [
                                            styles.link, {
                                                backgroundColor: theme.accent.bgPrimary,
                                                padding:         '5px 3px',
                                            },
                                        ] }>
                                        <GithubIcon color = { theme.main.color } />
                                        <Text
                                            break
                                            wrap
                                            style = { [ styles.linkText, { color: theme.main.color }] }>
                                            {
                                                contacts.github.url
                                            }
                                        </Text>
                                    </Link>
                                </li>
                            ) : null
                    }
                </ul>
            </View>
        );
    }

    return null;
};
