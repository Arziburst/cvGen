// Core
import React, { ChangeEvent, FC } from 'react';

// Bus
import { useInfoFields } from '../../../../bus/client/infoFields';

// Elements
import { UserAvatar } from './UserAvatar';

// Styles
import * as S from './styles';

export const ConstructorAvatar: FC = () => {
    const { handleChangeImg } = useInfoFields();

    const convertFileToImg = (event: ChangeEvent<HTMLInputElement>) => {
        const fileUrl = event.target.files?.item(0);

        if (fileUrl) {
            handleChangeImg(URL.createObjectURL(fileUrl));
        }
    };

    return (
        <S.Container>
            <S.Wrapper>
                <UserAvatar />
                <S.InputFile
                    accept = 'image/*'
                    type = 'file'
                    onChange = { convertFileToImg }
                />
            </S.Wrapper>
        </S.Container>
    );
};
