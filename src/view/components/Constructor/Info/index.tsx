// Core
import React, { FC } from 'react';

// Bus
import { useInfoFields } from '../../../../bus/client/infoFields';

// Elements
import { AppInput, AppTextarea } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorInfo: FC = () => {
    const {
        infoFields: { name, overview, position },
        debounceChangeName, debounceChangePosition,
        debounceChangeOverview,
    } = useInfoFields();

    return (
        <S.Container>
            <S.InputNameBox>
                <AppInput
                    handleChangeFunc = { (event) => {
                        debounceChangeName(event.target.value);
                    } }
                    placeholder = 'Name'
                    value = { name }
                />
            </S.InputNameBox>
            <S.InputPositionBox>
                <AppInput
                    handleChangeFunc = { (event) => {
                        debounceChangePosition(event.target.value);
                    } }
                    placeholder = 'Position'
                    value = { position }
                />
            </S.InputPositionBox>
            <S.InputOverviewBox>
                <AppTextarea
                    handleChangeFunc = { (event) => {
                        debounceChangeOverview(event.target.value);
                    } }
                    placeholder = 'Overview'
                    value = { overview }
                />
            </S.InputOverviewBox>
        </S.Container>
    );
};
