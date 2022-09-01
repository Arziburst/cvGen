// Core
import React, { ChangeEvent, FC } from 'react';
import { uniqueId } from 'lodash';

// Styles
import * as S from './styles';

// Components
import { Projects } from '../Projects';

// Elements
import { AddBtn, AppInput, AppTextarea, RemoveBtn, Title } from '../../elements';

// Types
import { descriptionList, experienceItem, inputVoidFunc, project, textareaVoidFunc } from '../../../bus/client/types';
type voidFunc = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => void;
type PropTypes = {
    experience: Array<experienceItem>;
    projects: Array<project>;
    handleChangePosition: voidFunc;
    handleChangeLocation: voidFunc;
    handleChangeDate: voidFunc;
    removeDescrField: (id: string) => void;
    handleAddDescField: (id: string) => void;
    handleDescription: (event: ChangeEvent<HTMLTextAreaElement>, descrItem: descriptionList) => void;
    handleChangeProjectsName: inputVoidFunc;
    handleChangeProjectsCustomer: inputVoidFunc;
    handleChangeProjectsDuration: inputVoidFunc;
    handleChangeProjectsRole: inputVoidFunc;
    handleChangeProjectsResponsibilities: textareaVoidFunc;
    handleChangeProjectsTeamSize: inputVoidFunc;
    handleChangeProjectsStack: inputVoidFunc;
    handleRemoveProject: (id: string) => void;
    handleAddProject: () => void;
}

export const Experience: FC<PropTypes> = (props) => {
    const {
        experience,
        projects,
        handleChangeDate,
        handleChangeLocation,
        handleChangePosition,
        handleDescription,
        removeDescrField,
        handleAddDescField,
        handleChangeProjectsCustomer,
        handleChangeProjectsDuration,
        handleChangeProjectsName,
        handleChangeProjectsResponsibilities,
        handleChangeProjectsRole,
        handleChangeProjectsStack,
        handleChangeProjectsTeamSize,
        handleRemoveProject,
        handleAddProject,
    } = props;

    return (
        <S.Container>
            <Title text = 'Experience'/>
            <S.Inner>
                {experience.map((experience) => (
                    <S.Box key = { experience.id }>
                        <S.Info>
                            <AppInput
                                defaultValue = { experience.position }
                                handleChangeFunc = { (event) => handleChangePosition(event, experience) }
                                placeholder = 'Your position'
                            />
                            <AppInput
                                defaultValue = { experience.date }
                                handleChangeFunc = { (event) => handleChangeDate(event, experience) }
                                placeholder = 'Sept. 2016 - Present'
                            />
                        </S.Info>
                        <S.Location>
                            <AppInput
                                defaultValue = { experience.location }
                                handleChangeFunc = { (event) => handleChangeLocation(event, experience) }
                                placeholder = 'Your location'
                            />
                        </S.Location>
                        <S.List>
                            {experience.descriptionList.map((description) => (
                                <S.Item key = { description.id }>
                                    <AppTextarea
                                        defaultValue = { description.description }
                                        handleChangeFunc = { (event: ChangeEvent<HTMLTextAreaElement>) => {
                                            handleDescription(event, { ...description });
                                        } }
                                        placeholder = 'Your descr'
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => removeDescrField(description.id) } />
                                </S.Item>
                            ))}
                            <S.BtnBox>
                                <AddBtn handleAddFunc = { () => handleAddDescField(uniqueId()) } />
                            </S.BtnBox>
                        </S.List>
                    </S.Box>
                ))}
                <Projects
                    handleAddProject = { handleAddProject }
                    handleChangeProjectsCustomer = { handleChangeProjectsCustomer }
                    handleChangeProjectsDuration = { handleChangeProjectsDuration }
                    handleChangeProjectsName = { handleChangeProjectsName }
                    handleChangeProjectsResponsibilities = { handleChangeProjectsResponsibilities }
                    handleChangeProjectsRole = { handleChangeProjectsRole }
                    handleChangeProjectsStack = { handleChangeProjectsStack }
                    handleChangeProjectsTeamSize = { handleChangeProjectsTeamSize }
                    handleRemoveProject = { handleRemoveProject }
                    projects = { projects }
                />
            </S.Inner>
        </S.Container>
    );
};
