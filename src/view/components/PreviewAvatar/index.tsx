// Core
import React, { ChangeEvent, FC } from 'react';

// Assets
import addUserIcon from '../../../assets/images/add-user-icon.svg';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    avatarUrl: string | null
    handleChangeImg: (event: ChangeEvent<HTMLInputElement>) => void
}

export const PreviewAvatar: FC<PropTypes> = ({ avatarUrl, handleChangeImg }) => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.UserAvatar
                    alt = 'user avatar'
                    isAvatar = { !!avatarUrl }
                    src = { avatarUrl ? avatarUrl : addUserIcon }
                />
                <S.InputFile
                    type = 'file'
                    onChange = { handleChangeImg }
                />
            </S.Wrapper>
        </S.Container>
    );
};
