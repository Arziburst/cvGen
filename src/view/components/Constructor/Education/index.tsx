// Core
import React, { FC } from 'react';

// Bus
import { useEducationField } from '../../../../bus/client/educationFields';
import { useThemes } from '../../../../bus/client/themes';

// Elements
import { AppDebounceInput, AppDebounceTextarea, Title, AddBtn, RemoveBtn } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorEducation: FC = () => {
    const {
        educationFields, addEducationField,
        handleChangeEducationDateField, handleChangeEducationDegreeField,
        handleChangeEducationDescriptionField, removeEducationField,
    } = useEducationField();

    const { themes } = useThemes();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Education' />
                <AddBtn handleAddFunc = { addEducationField } />
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
                                            handleChangeEducationDateField({ id, text: event.target.value });
                                        }  }
                                        placeholder = '2007 - 2013'
                                        value = { date }
                                    />
                                </S.Date>
                                <S.Degree>
                                    <AppDebounceInput
                                        decorElemColor = { themes.accent.bgSecond }
                                        handleChangeFunc = { (event) => {
                                            handleChangeEducationDegreeField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Degree name / University Location'
                                        value = { degree }
                                    />
                                </S.Degree>
                                <S.Description>
                                    <AppDebounceTextarea
                                        decorElemColor = { themes.accent.bgSecond }
                                        handleChangeFunc = { (event) => {
                                            handleChangeEducationDescriptionField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Tell about your degree'
                                        value = { description }
                                    />
                                </S.Description>
                            </S.Wrapper>
                            <RemoveBtn handleRemoveFunc = { () => removeEducationField(id) }/>
                        </S.Item>
                    );
                })}
            </S.List>
        </S.Container>
    );
};
