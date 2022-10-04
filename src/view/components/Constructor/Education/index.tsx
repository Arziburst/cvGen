// Core
import React, { FC } from 'react';

// Bus
import { useFields } from '../../../../bus/client/fields';
import { useThemes } from '../../../../bus/client/themes';

// Slice
import { educationInithialState } from '../../../../bus/client/fields/data';

// Elements
import { AppDebounceInput, AppDebounceTextarea, Title, AddBtn, RemoveBtn, AddFieldBlockBtn } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorEducation: FC = () => {
    const {
        fields: { educations },
        addFieldBlock,
        changeFieldTextInBlock,
        addFieldInBlock,
        removeFieldBlock,
    } = useFields();

    const { themes } = useThemes();

    if (educations) {
        return (
            <S.Container>
                <S.Box>
                    <Title text = 'Education' />
                    <AddBtn handleAddFunc = { () => addFieldInBlock({ data: educationInithialState, type: 'educations' }) } />
                </S.Box>
                <S.List>
                    {educations.items.map((education) => {
                        const {
                            date, degree,
                            description, id,
                        } = education;

                        return (
                            <S.Item key = { id }>
                                <S.Wrapper>
                                    <S.Date>
                                        <AppDebounceInput
                                            decorElemColor = { themes.accent.bgSecond }
                                            handleChangeFunc = { (event) => {
                                                changeFieldTextInBlock({ id, data: event.target.value, type: 'educations', fieldName: 'date' });
                                            } }
                                            placeholder = '2007 - 2013'
                                            value = { date.text }
                                        />
                                    </S.Date>
                                    <S.Degree>
                                        <AppDebounceInput
                                            decorElemColor = { themes.accent.bgSecond }
                                            handleChangeFunc = { (event) => {
                                                changeFieldTextInBlock({ id, data: event.target.value, type: 'educations', fieldName: 'degree' });
                                            } }
                                            placeholder = 'Degree name / University Location'
                                            value = { degree.text }
                                        />
                                    </S.Degree>
                                    <S.Description>
                                        <AppDebounceTextarea
                                            decorElemColor = { themes.accent.bgSecond }
                                            handleChangeFunc = { (event) => {
                                                changeFieldTextInBlock({ id, data: event.target.value, type: 'educations', fieldName: 'description' });
                                            } }
                                            placeholder = 'Tell about your degree'
                                            value = { description.text }
                                        />
                                    </S.Description>
                                </S.Wrapper>
                                <RemoveBtn handleRemoveFunc = { () => removeFieldBlock('educations') } />
                            </S.Item>
                        );
                    })}
                </S.List>
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'educations'
            handleAddFunc = { () => addFieldBlock({ type: 'educations', data: educationInithialState }) }
        />
    );
};
