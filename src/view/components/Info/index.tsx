// Core
import React, { ChangeEvent, FC } from 'react';

// Elements
import { AppInput, AppTextarea } from '../../elements';
// Styles
import * as S from './styles';

// Types
type voidFunc = (event: ChangeEvent<HTMLInputElement>) => void;

type PropTypes = {
    firstName: string;
    lastName: string;
    position: string;
    overview: string;
    handleChangeFirstname: voidFunc;
    handleChangeLastname: voidFunc;
    handleChangePosition: voidFunc;
    handleChangeOverview: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Info: FC<PropTypes> = ({
    firstName, position, overview,
    lastName,
    handleChangeFirstname, handleChangeLastname,
    handleChangePosition, handleChangeOverview,
}) => {
    return (
        <S.Container>
            <S.InputNameBox>
                <AppInput
                    defaultValue = { firstName }
                    handleChangeFunc = { handleChangeFirstname }
                    placeholder = 'First Name'
                />
            </S.InputNameBox>
            <S.InputNameBox>
                <AppInput
                    defaultValue = { lastName }
                    handleChangeFunc = { handleChangeLastname }
                    placeholder = 'Last Name'
                />
            </S.InputNameBox>
            <S.InputPositionBox>
                <AppInput
                    defaultValue = { position }
                    handleChangeFunc = { handleChangePosition }
                    placeholder = 'Position'
                />
            </S.InputPositionBox>
            <S.InputOverviewBox>
                <AppTextarea
                    defaultValue = { overview }
                    handleChangeFunc = { handleChangeOverview }
                    placeholder = 'Overview'
                />
            </S.InputOverviewBox>
        </S.Container>
    );
};
