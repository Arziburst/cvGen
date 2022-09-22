// Core
import React from 'react';
import { View, StyleSheet, Text, Image, Link } from '@react-pdf/renderer';

// Assets
import {
    pngPhoneIcon, pngHomeIcon, pngMailIcon,
    pngLinkedinIcon, pngGithubIcon,
} from '../../../../assets/images';


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
import { PdfGenTitle } from '../../../elements/pdfGenTitle';

// Types
import { Contact } from '../../../../bus/client/contactFields/types';
import { ThemeType } from '../../../../assets/themes/type';

type PropTypes = {
    contacts: Array<Contact>;
    theme: ThemeType;
}

export const PreviewContacts = ({ contacts, theme }: PropTypes) => {
    const getIconSrc = (type: string): string => {
        let iconUrl = '';

        if (type === 'mail') {
            iconUrl = pngMailIcon;
        } else if (type === 'phone') {
            iconUrl = pngPhoneIcon;
        } else if (type === 'adress') {
            iconUrl = pngHomeIcon;
        } else if (type === 'Linkedin') {
            iconUrl = pngLinkedinIcon;
        } else if (type === 'Github') {
            iconUrl = pngGithubIcon;
        }

        return iconUrl;
    };
    console.log(theme);

    return (
        <View style = { styles.box }>
            <PdfGenTitle text = 'Contacts'/>
            <ul>
                {
                    contacts?.map(({ id, url }) => {
                        const iconSrc = getIconSrc(id);

                        return (
                            <li key = { id }>
                                <Link
                                    break
                                    src = { url }
                                    style = { styles.link }>
                                    <Image
                                        src = { iconSrc }
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
                    })
                }
            </ul>
        </View>
    );
};
