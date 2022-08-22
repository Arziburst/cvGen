// Core
import React, { FC } from 'react';

// Assets
import userIcon from '../../../assets/images/user-icon.svg';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    avatarUrl: string | null
}

export const Avatar: FC<PropTypes> = ({ avatarUrl }) => {
    return (
        <S.Container>
            <S.UserAvatar
                alt = 'user avatar'
                isAvatar = { !!avatarUrl }
                src = { avatarUrl ? avatarUrl : userIcon }
            />
        </S.Container>
    );
};
