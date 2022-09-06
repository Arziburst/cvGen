// Core
import React, { ChangeEvent, FC } from 'react';

// Bus
import { useExperienceFields } from '../../../bus/client/experienceFields';

// Styles
import * as S from './styles';

// Components
import { PreviewProjects } from '../PreviewProjects';

// Elements
import { AddBtn, AppInput, AppTextarea, RemoveBtn, Title } from '../../elements';

export const PreviewExperience: FC = () => {
    const {
        experienceFields, debounceSetExperiencePositionField,
        debounceSetExperienceDateField, debounceSetExperienceLocationField,
        debounceSetDescrField, removeExperienceDescriptionField,
        addExperienceDescriptionField,
    } = useExperienceFields();

    return (
        <S.Container>
            <Title text = 'Experience' />
            <S.Inner>
                {experienceFields.map((experience) => (
                    <S.Box key = { experience.id }>
                        <S.Info>
                            <AppInput
                                defaultValue = { experience.position }
                                handleChangeFunc = { (event) => {
                                    debounceSetExperiencePositionField({ id: experience.id, text: event.target.value });
                                } }
                                placeholder = 'Your position'
                            />
                            <AppInput
                                defaultValue = { experience.date }
                                handleChangeFunc = { (event) => {
                                    debounceSetExperienceDateField({ id: experience.id, text: event.target.value });
                                }  }
                                placeholder = 'Sept. 2016 - Present'
                            />
                        </S.Info>
                        <S.Location>
                            <AppInput
                                defaultValue = { experience.location }
                                handleChangeFunc = { (event) => {
                                    debounceSetExperienceLocationField({ id: experience.id, text: event.target.value });
                                } }
                                placeholder = 'Your location'
                            />
                        </S.Location>
                        <S.List>
                            <S.TitleBox>
                                <Title text = 'Description' />
                                <AddBtn handleAddFunc = { () => addExperienceDescriptionField() } />
                            </S.TitleBox>
                            {experience.descriptionList.map((description) => (
                                <S.Item key = { description.id }>
                                    <AppTextarea
                                        defaultValue = { description.description }
                                        handleChangeFunc = { (event: ChangeEvent<HTMLTextAreaElement>) => {
                                            debounceSetDescrField({ id: description.id, text: event.target.value });
                                        } }
                                        placeholder = 'Your descr'
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => {
                                        removeExperienceDescriptionField(description.id);
                                    } }
                                    />
                                </S.Item>
                            ))}
                        </S.List>
                    </S.Box>
                ))}
                <PreviewProjects />
            </S.Inner>
        </S.Container>
    );
};
