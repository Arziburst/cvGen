// Core
import React, { FC } from 'react';

// Bus
import { useInfoFields } from '../../../bus/client/infoFields';

// Assets
import addUserIcon from '../../../assets/images/add-user-icon.svg';

// Styles
import * as S from './styles';

// Types
import { inputVoidFunc } from '../../../bus/client/types';

export const PreviewAvatar: FC = () => {
    const {
        infoFields: { avatar }, debounceChangeImg,
    } = useInfoFields();

    const handleChangeImg: inputVoidFunc = (event) => {
        const fileUrl = event.target.files?.item(0);

        if (fileUrl) {
            debounceChangeImg(URL.createObjectURL(fileUrl));
        }
    };

    return (
        <S.Container>
            <S.Wrapper>
                <S.UserAvatar
                    alt = 'user avatar'
                    isAvatar = { !!avatar }
                    src = { avatar ? avatar : addUserIcon }
                />
                <S.InputFile
                    type = 'file'
                    onChange = { handleChangeImg }
                />
            </S.Wrapper>
        </S.Container>
    );
};
