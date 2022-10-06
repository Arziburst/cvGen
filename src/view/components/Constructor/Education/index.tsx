// Core
import React, { FC } from 'react';

// Bus
import { useThemes } from '../../../../bus/client/themes';
import { useEducationField } from '../../../../bus/client/educationFields';

// Elements
import { AppDebounceInput, AppDebounceTextarea, Title, AddBtn, RemoveBtn, AddFieldBlockBtn } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorEducation: FC = () => {
    const {
        educationFields,
        addEducationBlock,
        handleChangeFieldInBlock,
        removeEducationBlockField,
        addEducation,
        resetEducationFieldsToInithialState,
        removeEducationFieldInBlock,
    } = useEducationField();

    const { themes } = useThemes();

    if (educationFields) {
        return (
            <S.Container>
                <S.Box>
                    <Title text = 'Education' />
                    <RemoveBtn handleRemoveFunc = { () => resetEducationFieldsToInithialState() } />
                </S.Box>
                <S.List>
                    {educationFields.map((education) => {
                        const {
                            date, degree,
                            description, id,
                        } = education;

                        return (
                            <S.Item key = { id }>
                                <S.Wrapper>
                                    {
                                        date
                                            ? (
                                                <S.Date>
                                                    <AppDebounceInput
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInBlock({
                                                                id, data:
                                                                { id: date.id, text: event.target.value },
                                                                type: 'date',
                                                            });
                                                        } }
                                                        placeholder = '2007 - 2013'
                                                        value = { date.text }
                                                    />
                                                    <RemoveBtn
                                                        handleRemoveFunc = { () => removeEducationFieldInBlock({
                                                            id,
                                                            type: 'date',
                                                        }) }
                                                        key = { id }
                                                    />
                                                </S.Date>
                                            ) : null
                                    }
                                    {
                                        degree
                                            ? (
                                                <S.Degree>
                                                    <AppDebounceInput
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInBlock({
                                                                id,
                                                                data: { id: date.id, text: event.target.value },
                                                                type: 'degree',
                                                            });
                                                        } }
                                                        placeholder = 'Degree name / University Location'
                                                        value = { degree.text }
                                                    />
                                                    <RemoveBtn
                                                        handleRemoveFunc = { () => removeEducationFieldInBlock({
                                                            id,
                                                            type: 'degree',
                                                        }) }
                                                        key = { id }
                                                    />
                                                </S.Degree>
                                            ) : null
                                    }
                                    {
                                        description
                                            ? (
                                                <S.Description>
                                                    <AppDebounceTextarea
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInBlock({
                                                                id,
                                                                data: { id: date.id, text: event.target.value },
                                                                type: 'description',
                                                            });
                                                        } }
                                                        placeholder = 'Tell about your degree'
                                                        value = { description.text }
                                                    />
                                                    <RemoveBtn
                                                        handleRemoveFunc = { () => removeEducationFieldInBlock({
                                                            id,
                                                            type: 'description',
                                                        }) }
                                                        key = { id }
                                                    />
                                                </S.Description>
                                            ) : null
                                    }
                                    <RemoveBtn handleRemoveFunc = { () => removeEducationBlockField(id) } />
                                </S.Wrapper>
                            </S.Item>
                        );
                    })}
                    <AddBtn
                        handleAddFunc = { () => addEducationBlock() }
                        text = 'education'
                    />
                </S.List>
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'educations'
            handleAddFunc = { () => addEducation() }
        />
    );
};
