// Core
import React, { FC } from 'react';

// Bus
import { useInfoFields } from '../../../bus/client/infoFields';

// Elements
import { AppInput, AppTextarea } from '../../elements';

// Styles
import * as S from './styles';

export const PreviewInfo: FC = () => {
    const {
        infoFields: { name, overview, position },
        debounceChangeName, debounceChangePosition,
        debounceChangeOverview,
    } = useInfoFields();

    return (
        <S.Container>
            <S.InputNameBox>
                <AppInput
                    defaultValue = { name }
                    handleChangeFunc = { (event) => {
                        debounceChangeName(event.target.value);
                    } }
                    placeholder = 'Name'
                />
            </S.InputNameBox>
            <S.InputPositionBox>
                <AppInput
                    defaultValue = { position }
                    handleChangeFunc = { (event) => {
                        debounceChangePosition(event.target.value);
                    } }
                    placeholder = 'Position'
                />
            </S.InputPositionBox>
            <S.InputOverviewBox>
                <AppTextarea
                    defaultValue = { overview }
                    handleChangeFunc = { (event) => {
                        debounceChangeOverview(event.target.value);
                    } }
                    placeholder = 'Overview'
                />
            </S.InputOverviewBox>
        </S.Container>
    );
};
