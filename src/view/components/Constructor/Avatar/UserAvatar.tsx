// Core
import React, { FC } from 'react';

// Bus
import { useInfoFields } from '../../../../bus/client/infoFields';

// Assets
import { svgAddUserIcon } from '../../../../assets/images';

// Styles
import * as S from './styles';

export const UserAvatar: FC = () => {
    const {
        infoFields: { avatar },
    } = useInfoFields();

    return (
        avatar
            ? (
                <S.UserAvatar
                    alt = 'user avatar'
                    src = { avatar }
                />
            )
            : <S.UserIcon src = { svgAddUserIcon } />
    );
};
