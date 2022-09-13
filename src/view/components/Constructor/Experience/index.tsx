// Core
import React, { ChangeEvent, FC } from 'react';

// Bus
import { useExperienceFields } from '../../../../bus/client/experienceFields';

// Styles
import * as S from './styles';

// Components
import { ConstructorProjects } from '../Projects';

// Elements
import { AddBtn, AppInput, AppTextarea, RemoveBtn, Title } from '../../../elements';

export const ConstructorExperience: FC = () => {
    const {
        experienceFields, debounceSetExperiencePositionField,
        debounceSetExperienceDateField, debounceSetExperienceLocationField,
        debounceSetDescrField, removeExperienceDescriptionField,
        addExperienceDescriptionField, addExperienceField,
    } = useExperienceFields();

    return (
        <S.Container>
            <S.TextBox>
                <Title text = 'Experience' />
                <AddBtn handleAddFunc = { () => addExperienceField() } />
            </S.TextBox>
            <S.Inner>
                {experienceFields.map((experience) => (
                    <S.Box key = { experience.id }>
                        <S.Info>
                            <AppInput
                                handleChangeFunc = { (event) => {
                                    debounceSetExperiencePositionField({ id: experience.id, text: event.target.value });
                                } }
                                placeholder = 'Your position'
                                value = { experience.position }
                            />
                            <AppInput
                                handleChangeFunc = { (event) => {
                                    debounceSetExperienceDateField({ id: experience.id, text: event.target.value });
                                }  }
                                placeholder = 'Sept. 2016 - Present'
                                value = { experience.date }
                            />
                        </S.Info>
                        <S.Location>
                            <AppInput
                                handleChangeFunc = { (event) => {
                                    debounceSetExperienceLocationField({ id: experience.id, text: event.target.value });
                                } }
                                placeholder = 'Company & location'
                                value = { experience.location }
                            />
                        </S.Location>
                        <S.List>
                            <S.TitleBox>
                                <Title text = 'Description' />
                                <AddBtn handleAddFunc = { () => addExperienceDescriptionField(experience.id) } />
                            </S.TitleBox>
                            {experience.descriptionList.map((description) => (
                                <S.Item key = { description.id }>
                                    <AppTextarea
                                        handleChangeFunc = { (event: ChangeEvent<HTMLTextAreaElement>) => {
                                            debounceSetDescrField({ id: description.id, text: event.target.value });
                                        } }
                                        placeholder = 'Your descr'
                                        value = { description.description }
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => {
                                        removeExperienceDescriptionField(description.id);
                                    } }
                                    />
                                </S.Item>
                            ))}
                        </S.List>
                        <ConstructorProjects
                            experienceId = { experience.id }
                            projects = { experience.projects }
                        />
                    </S.Box>
                ))}
            </S.Inner>
        </S.Container>
    );
};
