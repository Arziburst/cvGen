// Core
import React, { FC } from 'react';

// Bus
import { useAwardFields } from '../../../bus/client/awardFields';

// Elements
import { AddBtn, RemoveBtn, Title, AppInput } from '../../elements';

// Styles
import * as S from './styles';

export const PriviewAward: FC = () => {
    const {
        awardFields, debounceChangeAwardDateField,
        debounceChangeAwardLocationField, debounceChangeAwardReceivedField,
        debounceCreateAwardField, debounceRemoveAwardField,
    } = useAwardFields();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Awards'/>
                <AddBtn handleAddFunc = { debounceCreateAwardField }/>
            </S.Box>
            <S.List>
                {awardFields.map((award) => (
                    <S.Item>
                        <S.Wrapper>
                            <AppInput
                                defaultValue = { award.received }
                                handleChangeFunc = { (event) => {
                                    debounceChangeAwardReceivedField({ id: award.id, text: event.target.value });
                                } }
                                placeholder = 'Awards Received'
                            />
                            <AppInput
                                defaultValue = { award.date }
                                handleChangeFunc = { (event) => {
                                    debounceChangeAwardDateField({ id: award.id, text: event.target.value });
                                } }
                                placeholder = 'April 2015'
                            />
                            <AppInput
                                defaultValue = { award.location }
                                handleChangeFunc = { (event) => {
                                    debounceChangeAwardLocationField({ id: award.id, text: event.target.value });
                                } }
                                placeholder = 'Place, Location'
                            />
                        </S.Wrapper>
                        <RemoveBtn handleRemoveFunc = { () => debounceRemoveAwardField(award.id) } />
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
};
