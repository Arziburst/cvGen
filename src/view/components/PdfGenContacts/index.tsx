// Core
import React from 'react';
import { View, StyleSheet, Text, Image, Link } from '@react-pdf/renderer';

// Assets
import phoneIcon from '../../../assets/images/phone-icon.png';


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
        display:       'flex',
        flexDirection: 'row',
        alignItems:    'center',
    },
    linkText: {

    },
    linkImg: {
        width:     '10px',
        height:    '10px',
        objectFit: 'cover',
    },
});

// Types
import { contactItem } from '../../../bus/client/fields';

type PropTypes = {
    contacts: Array<contactItem>
}

export const PdfGenContacts = ({ contacts }: PropTypes) => {
    console.log(contacts);

    return (
        <View style = { styles.box }>
            <Text style = { styles.title }>Contacts</Text>
            <ul style = { styles.list }>
                {contacts?.map(({ id, url }) => (
                    <li
                        key = { id }
                        style = { styles.item }>
                        <Link
                            src = { url }
                            style = { styles.link }>
                            <Image
                                src = { phoneIcon }
                                style = { styles.linkImg }
                            />
                            <Text style = { styles.linkText }>{url}</Text>
                        </Link>
                    </li>
                ))}
            </ul>
        </View>
    );
};
