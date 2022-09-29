// Core
import React, { FC } from 'react';

// Bus
import { useExperienceFields } from '../../../../bus/client/experienceFields';
import { useThemes } from '../../../../bus/client/themes';

// Styles
import * as S from './styles';

// Components
import { ConstructorProjects } from '../Projects';

// Elements
import { AddBtn, AppDebounceInput, AppDebounceTextarea, RemoveBtn, Title } from '../../../elements';

export const ConstructorExperience: FC = () => {
    const {
        experienceFields, handleSetExperiencePositionField,
        handleSetExperienceDateField, handleSetExperienceLocationField,
        handleSetDescrField, removeExperienceDescriptionField,
        addExperienceDescriptionField, addExperienceField,
        removeExperienceField,
    } = useExperienceFields();

    const { themes } = useThemes();

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
                            <AppDebounceInput
                                decorElemColor = { themes.accent.bg }
                                handleChangeFunc = { (event) => {
                                    handleSetExperiencePositionField({ id: experience.id, text: event.target.value });
                                } }
                                placeholder = 'Your position'
                                value = { experience.position }
                            />
                            <AppDebounceInput
                                decorElemColor = { themes.accent.bg }
                                handleChangeFunc = { (event) => {
                                    handleSetExperienceDateField({ id: experience.id, text: event.target.value });
                                }  }
                                placeholder = 'Sept. 2016 - Present'
                                value = { experience.date }
                            />
                        </S.Info>
                        <S.Location>
                            <AppDebounceInput
                                decorElemColor = { themes.accent.bg }
                                handleChangeFunc = { (event) => {
                                    handleSetExperienceLocationField({ id: experience.id, text: event.target.value });
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
                                    <AppDebounceTextarea
                                        decorElemColor = { themes.accent.bg }
                                        handleChangeFunc = { (event) => {
                                            handleSetDescrField({ id: description.id, text: event.target.value });
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
                        <S.RemoveBtn onClick = { () => removeExperienceField(experience.id) }></S.RemoveBtn>
                    </S.Box>
                ))}
            </S.Inner>
        </S.Container>
    );
};
