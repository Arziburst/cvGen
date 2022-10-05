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
                                    </S.Date>
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
                                    </S.Degree>
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
                                    </S.Description>
                                </S.Wrapper>
                                <RemoveBtn handleRemoveFunc = { () => removeEducationBlockField(id) } />
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
