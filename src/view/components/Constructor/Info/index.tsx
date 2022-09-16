// Core
import React, { FC } from 'react';

// Bus
import { useInfoFields } from '../../../../bus/client/infoFields';

// Elements
import { AppDebounceInput, AppDebounceTextarea } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorInfo: FC = () => {
    const {
        infoFields: { name, overview, position },
        handleChangeName, handleChangeOverview,
        handleChangePosition,
    } = useInfoFields();

    return (
        <S.Container>
            <S.InputNameBox>
                <AppDebounceInput
                    handleChangeFunc = { (event) => {
                        handleChangeName(event.target.value);
                    } }
                    placeholder = 'Name'
                    value = { name }
                />
            </S.InputNameBox>
            <S.InputPositionBox>
                <AppDebounceInput
                    handleChangeFunc = { (event) => {
                        handleChangePosition(event.target.value);
                    } }
                    placeholder = 'Position'
                    value = { position }
                />
            </S.InputPositionBox>
            <S.InputOverviewBox>
                <AppDebounceTextarea
                    handleChangeFunc = { (event) => {
                        handleChangeOverview(event.target.value);
                    } }
                    placeholder = 'Overview'
                    value = { overview }
                />
            </S.InputOverviewBox>
        </S.Container>
    );
};
