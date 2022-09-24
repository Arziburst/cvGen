// Core
import React from 'react';
import { View, Image, StyleSheet } from '@react-pdf/renderer';

//Elements
import { UserIcon } from '../../../elements/pdfGenIcons';

//Types
import { ThemeType } from '../../../../assets/themes/type';

// Styles
const styles = StyleSheet.create({
    box: {
        height:         '140px',
        width:          '100%',
        borderRadius:   '50%',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
    },
    avatar: {
        borderRadius: '50%',
        width:        '100%',
        height:       '100%',
        objectFit:    'cover',
    },
    icon: {
        width:  '64px',
        height: '64px',
    },
});

// Types
type PropTypes = {
    avatar: string;
    theme: ThemeType;
}

export const PreviewAvatar = ({ avatar, theme }: PropTypes) => {
    return (
        <View style = { [ styles.box, { backgroundColor: theme.accent.avatar }] }>
            {
                avatar.length === 0
                    ? (
                        <UserIcon color = { theme.main.color }/>
                    ) : (
                        <Image
                            src = { avatar }
                            style = { styles.avatar }
                        />
                    )
            }
        </View>
    );
};
