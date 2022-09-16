// Core
import React, { FC } from 'react';

// Bus
import { useAwardFields } from '../../../../bus/client/awardFields';

// Elements
import { AddBtn, RemoveBtn, Title, AppInput } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorAward: FC = () => {
    const {
        awardFields, handleChangeAwardDateField,
        handleChangeAwardLocationField, handleChangeAwardReceivedField,
        createAwardField, removeAwardField,
    } = useAwardFields();


    return (
        <S.Container>
            <S.Box>
                <Title text = 'Awards'/>
                <AddBtn handleAddFunc = { createAwardField }/>
            </S.Box>
            <S.List>
                {awardFields.map((award) => (
                    <S.Item key = { award.id }>
                        <S.Wrapper>
                            <S.ReceivedText>
                                <AppInput
                                    handleChangeFunc = { (event) => {
                                        handleChangeAwardReceivedField({ id: award.id, text: event.target.value });
                                    } }
                                    placeholder = 'Awards Received'
                                    value = { award.received }
                                />
                            </S.ReceivedText>
                            <S.DateText>
                                <AppInput
                                    handleChangeFunc = { (event) => {
                                        handleChangeAwardDateField({ id: award.id, text: event.target.value });
                                    } }
                                    placeholder = 'April 2015'
                                    value = { award.date }
                                />
                            </S.DateText>
                            <S.LocationText>
                                <AppInput
                                    handleChangeFunc = { (event) => {
                                        handleChangeAwardLocationField({ id: award.id, text: event.target.value });
                                    } }
                                    placeholder = 'Place, Location'
                                    value = { award.location }
                                />
                            </S.LocationText>
                        </S.Wrapper>
                        <RemoveBtn handleRemoveFunc = { () => removeAwardField(award.id) } />
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
};
