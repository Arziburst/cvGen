// Core
import React from 'react';
import { View, Image, StyleSheet } from '@react-pdf/renderer';

// Assets
import userIcon from '../../../assets/images/user-icon.png';

// Styles
const styles = StyleSheet.create({
    box: {
        height:          '120px',
        borderRadius:    '50%',
        backgroundColor: '#f0efed',
        display:         'flex',
        justifyContent:  'center',
        alignItems:      'center',
    },
    avatar: {
        borderRadius: '50%',
        width:        '100%',
        height:       '100%',
        objectFit:    'cover',
    },
    icon: {
        width:  '60%',
        height: '60%',
    },
});

// Types
type PropTypes = {
    avatar: string
}

export const PdfGenAvatar = ({ avatar }: PropTypes) => {
    return (
        <View style = { styles.box }>
            {
                avatar.length === 0
                    ? (
                        <Image
                            src = { userIcon }
                            style = { styles.icon }
                        />
                    )
                    : (
                        <Image
                            src = { avatar }
                            style = { styles.avatar }
                        />
                    )
            }
        </View>
    );
};
