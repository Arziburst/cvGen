// Core
import React, { FC } from 'react';

// Bus
import { useInfoFields } from '../../../bus/client/infoFields';

// Elements
import { AppInput, AppTextarea } from '../../elements';

// Styles
import * as S from './styles';

// Types
import { inputVoidFunc, textareaVoidFunc } from '../../../bus/client/types';

export const PreviewInfo: FC = () => {
    const {
        infoFields: { name, overview, position },
        debounceChangeName, debounceChangeOverview,
        debounceChangePosition,
    } = useInfoFields();

    const handleChangeName: inputVoidFunc = (event) => {
        debounceChangeName(event.target.value);
    };

    const handleChangePosition: inputVoidFunc = (event) => {
        debounceChangePosition(event.target.value);
    };

    const handleChangeOverview: textareaVoidFunc = (event) => {
        debounceChangeOverview(event.target.value);
    };

    return (
        <S.Container>
            <S.InputNameBox>
                <AppInput
                    defaultValue = { name }
                    handleChangeFunc = { handleChangeName }
                    placeholder = 'Name'
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
