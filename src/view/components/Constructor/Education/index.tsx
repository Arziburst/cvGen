// Core
import React, { FC } from 'react';

// Bus
import { useEducationField } from '../../../../bus/client/educationFields';

// Elements
import { AppTextarea, AppInput, Title, AddBtn, RemoveBtn } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorEducation: FC = () => {
    const {
        educationFields, addEducationField,
        debounceChangeEducationDateField, debounceChangeEducationDegreeField,
        debounceChangeEducationDescriptionField, removeEducationField,
    } = useEducationField();

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
                                    <AppInput
                                        defaultValue = { date }
                                        handleChangeFunc = { (event) => {
                                            debounceChangeEducationDateField({ id, text: event.target.value });
                                        }  }
                                        placeholder = '2007 - 2013'
                                    />
                                </S.Date>
                                <S.Degree>
                                    <AppInput
                                        defaultValue = { degree }
                                        handleChangeFunc = { (event) => {
                                            debounceChangeEducationDegreeField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Degree name / University Location'
                                    />
                                </S.Degree>
                                <S.Description>
                                    <AppTextarea
                                        defaultValue = { description }
                                        handleChangeFunc = { (event) => {
                                            debounceChangeEducationDescriptionField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Tell about your degree'
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
