// Core
import React, { ChangeEvent, FC } from 'react';

// Bus
import { useInfoFields } from '../../../../bus/client/infoFields';

// Assets
import { svgAddUserIcon } from '../../../../assets/images';

// Styles
import * as S from './styles';

export const ConstructorAvatar: FC = () => {
    const {
        infoFields: { avatar }, debounceChangeImg,
    } = useInfoFields();

    const handleChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
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
                    src = { avatar ? avatar : svgAddUserIcon }
                />
                <S.InputFile
                    type = 'file'
                    onChange = { handleChangeImg }
                />
            </S.Wrapper>
        </S.Container>
    );
};
