// Core
import React, { ChangeEvent, FC } from 'react';

// Elements
import { TextInput } from '../../elements';
// Styles
import * as S from './styles';

// Types
type voidFunc = (event: ChangeEvent<HTMLInputElement>) => void;

type PropTypes = {
    name: string;
    handleChangeName: voidFunc;
    // position: string
    // overview: string
}

export const Info: FC<PropTypes> = ({ name, handleChangeName }) => {
    return (
        <S.Container>
            <S.InputNameBox>
                <TextInput
                    defaultValue = { name }
                    handleChangeFunc = { handleChangeName }
                />
            </S.InputNameBox>
        </S.Container>
    );
};
