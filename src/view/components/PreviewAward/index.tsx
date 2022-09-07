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
                    <S.Item key = { award.id }>
                        <S.Wrapper>
                            <S.ReceivedText>
                                <AppInput
                                    defaultValue = { award.received }
                                    handleChangeFunc = { (event) => {
                                        debounceChangeAwardReceivedField({ id: award.id, text: event.target.value });
                                    } }
                                    placeholder = 'Awards Received'
                                />
                            </S.ReceivedText>
                            <S.DateText>
                                <AppInput
                                    defaultValue = { award.date }
                                    handleChangeFunc = { (event) => {
                                        debounceChangeAwardDateField({ id: award.id, text: event.target.value });
                                    } }
                                    placeholder = 'April 2015'
                                />
                            </S.DateText>
                            <S.LocationText>
                                <AppInput
                                    defaultValue = { award.location }
                                    handleChangeFunc = { (event) => {
                                        debounceChangeAwardLocationField({ id: award.id, text: event.target.value });
                                    } }
                                    placeholder = 'Place, Location'
                                />
                            </S.LocationText>
                        </S.Wrapper>
                        <RemoveBtn handleRemoveFunc = { () => debounceRemoveAwardField(award.id) } />
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
};
