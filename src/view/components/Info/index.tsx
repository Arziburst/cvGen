// Core
import React, { ChangeEvent, FC } from 'react';

// Elements
import { AppInput, AppTextarea } from '../../elements';
// Styles
import * as S from './styles';

// Types
type voidFunc = (event: ChangeEvent<HTMLInputElement>) => void;

type PropTypes = {
    handleChangeName: voidFunc;
    handleChangePosition: voidFunc;
    handleChangeOverview: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Info: FC<PropTypes> = ({
    handleChangeName, handleChangePosition,
    handleChangeOverview,
}) => {
    return (
        <S.Container>
            <S.InputNameBox>
                <AppInput
                    handleChangeFunc = { handleChangeName }
                    placeholder = 'Your Name'
                />
            </S.InputNameBox>
            <S.InputPositionBox>
                <AppInput
                    handleChangeFunc = { handleChangePosition }
                    placeholder = 'Position'
                />
            </S.InputPositionBox>
            <S.InputOverviewBox>
                <AppTextarea
                    handleChangeFunc = { handleChangeOverview }
                    placeholder = 'Overview'
                />
            </S.InputOverviewBox>
        </S.Container>
    );
};
