// Core
import React from 'react';
import { View, StyleSheet, Text, Image, Link } from '@react-pdf/renderer';

// Assets
import phoneIcon from '../../../assets/images/phone-icon.png';
import homeIcon from '../../../assets/images/home-icon.png';
import mailIcon from '../../../assets/images/mail-icon.png';
import linkedinIcon from '../../../assets/images/linkedin-icon.png';
import githubIcon from '../../../assets/images/github-icon.png';

// Styles
const styles = StyleSheet.create({
    box: {

    },
    title: {

    },
    list: {

    },
    item: {

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
});

// Elements
import { PdfGenTitle } from '../../elements/pdfGenTitle';

// Types
import { contactItem } from '../../../bus/client/fields';

type PropTypes = {
    contacts: Array<contactItem>
}

export const PdfGenContacts = ({ contacts }: PropTypes) => {
    return (
        <View style = { styles.box }>
            <PdfGenTitle text = 'Contacts'/>
            <ul style = { styles.list }>
                {contacts?.map(({ id, url }) => {
                    let iconUrl = '';

                    if (id === 'mail') {
                        iconUrl = mailIcon;
                    } else if (id === 'phone') {
                        iconUrl = phoneIcon;
                    } else if (id === 'adress') {
                        iconUrl = homeIcon;
                    } else if (id === 'Linkedin') {
                        iconUrl = linkedinIcon;
                    } else if (id === 'Github') {
                        iconUrl = githubIcon;
                    }

                    if (url.length === 0) {
                        return null;
                    }

                    return (
                        <li
                            key = { id }
                            style = { styles.item }>
                            <Link
                                break
                                src = { url }
                                style = { styles.link }>
                                <Image
                                    src = { iconUrl }
                                    style = { styles.linkImg }
                                />
                                <Text
                                    break
                                    wrap
                                    style = { styles.linkText }>
                                    {id === 'Linkedin' ? id : url}
                                </Text>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </View>
    );
};
