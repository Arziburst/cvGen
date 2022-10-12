// Core
import React, { FC } from 'react';

// Bus
import { useExperienceFields } from '../../../../bus/client/experienceFields';
import { useThemes } from '../../../../bus/client/themes';

// Styles
import * as S from './styles';

//Components
import { CustomDatePicker } from '../../CustomDatePicker';

// Elements
import { AddBtn, AddFieldBlockBtn, AppDebounceInput, AppDebounceTextarea, RemoveBtn } from '../../../elements';

// Types
import { Project } from '../../../../bus/client/experienceFields/types';

type propTypes = {
    projects: Array<Project> | null
    experienceId: string;
}

export const ConstructorProjects: FC<propTypes> = ({ projects, experienceId }) => {
    const {
        addExpeienceProject,
        removeProjectBlock,
        removeProject,
        handleChangeFieldInProjectBlock,
        addExpeienceProjectBlock,
        removeProjectFieldInBlock,
    } = useExperienceFields();

    const { themes } = useThemes();

    if (projects) {
        return (
            <S.Container>
                <S.TitleBox>
                    <S.Title>
                        Projects
                    </S.Title>
                    <RemoveBtn handleRemoveFunc = { () => removeProject(experienceId) } />
                </S.TitleBox>
                <S.List>
                    {projects.map((project) => {
                        const {
                            customer, duration, name, id,
                            responsibilities, role, stack, teamSize,
                        } = project;

                        return (
                            <S.Item key = { id }>
                                <S.Wrapper>
                                    {
                                        name
                                            ? (
                                                <S.Name>
                                                    <AppDebounceInput
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInProjectBlock({
                                                                type: 'name',
                                                                data: {
                                                                    id:   name.id,
                                                                    text: event.target.value,
                                                                },
                                                                experienceId,
                                                                projectId: id,
                                                            });
                                                        } }
                                                        placeholder = 'Name'
                                                        value = { name.text }
                                                    />
                                                    <RemoveBtn handleRemoveFunc = { () => removeProjectFieldInBlock({
                                                        experienceId,
                                                        projectId: id,
                                                        type:      'name',
                                                    }) }
                                                    />
                                                </S.Name>
                                            )
                                            : null
                                    }
                                    {
                                        customer
                                            ? (
                                                <S.Customer>
                                                    <AppDebounceInput
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInProjectBlock({
                                                                type: 'customer',
                                                                data: {
                                                                    id:   customer.id,
                                                                    text: event.target.value,
                                                                },
                                                                experienceId,
                                                                projectId: id,
                                                            });
                                                        } }
                                                        placeholder = 'Customer'
                                                        value = { customer.text }
                                                    />
                                                    <RemoveBtn handleRemoveFunc = { () => removeProjectFieldInBlock({
                                                        experienceId,
                                                        projectId: id,
                                                        type:      'customer',
                                                    }) }
                                                    />
                                                </S.Customer>
                                            )
                                            : null
                                    }

                                    <S.Box>
                                        {
                                            role
                                                ? (
                                                    <S.Role>
                                                        <AppDebounceInput
                                                            decorElemColor = { themes.accent.bgSecond }
                                                            handleChangeFunc = { (event) => {
                                                                handleChangeFieldInProjectBlock({
                                                                    type: 'role',
                                                                    data: {
                                                                        id:   role.id,
                                                                        text: event.target.value,
                                                                    },
                                                                    experienceId,
                                                                    projectId: id,
                                                                });
                                                            } }
                                                            placeholder = 'Role'
                                                            value = { role.text }
                                                        />
                                                        <RemoveBtn handleRemoveFunc = {
                                                            () => removeProjectFieldInBlock({
                                                                experienceId,
                                                                projectId: id,
                                                                type:      'role',
                                                            }) }
                                                        />
                                                    </S.Role>
                                                )
                                                : null
                                        }
                                        {
                                            duration
                                                ? (
                                                    <S.Duration>
                                                        <CustomDatePicker
                                                            dataEnd = { duration.dateEnd }
                                                            dataStart = { duration.dateStart }
                                                            dateId = { project.id }
                                                            id = { experienceId }
                                                            typeField = 'project'
                                                        />
                                                        <RemoveBtn handleRemoveFunc = {
                                                            () => removeProjectFieldInBlock({
                                                                experienceId,
                                                                projectId: id,
                                                                type:      'duration',
                                                            }) }
                                                        />
                                                    </S.Duration>
                                                )
                                                : null
                                        }
                                    </S.Box>
                                    {
                                        responsibilities
                                            ? (
                                                <S.Responsibilities>
                                                    <AppDebounceTextarea
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInProjectBlock({
                                                                type: 'responsibilities',
                                                                data: {
                                                                    id:   responsibilities.id,
                                                                    text: event.target.value,
                                                                },
                                                                experienceId,
                                                                projectId: id,
                                                            });
                                                        } }
                                                        placeholder = 'Responsibilities'
                                                        value = { responsibilities.text }
                                                    />
                                                    <RemoveBtn handleRemoveFunc = { () => removeProjectFieldInBlock({
                                                        experienceId,
                                                        projectId: id,
                                                        type:      'responsibilities',
                                                    }) }
                                                    />
                                                </S.Responsibilities>
                                            )
                                            : null
                                    }
                                    {
                                        teamSize
                                            ? (
                                                <S.TeamSize>
                                                    <AppDebounceInput
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInProjectBlock({
                                                                type: 'teamSize',
                                                                data: {
                                                                    id:   teamSize.id,
                                                                    text: event.target.value,
                                                                },
                                                                experienceId,
                                                                projectId: id,
                                                            });
                                                        } }
                                                        placeholder = 'Teamsize'
                                                        value = { teamSize.text }
                                                    />
                                                    <RemoveBtn handleRemoveFunc = { () => removeProjectFieldInBlock({
                                                        experienceId,
                                                        projectId: id,
                                                        type:      'teamSize',
                                                    }) }
                                                    />
                                                </S.TeamSize>
                                            )
                                            : null
                                    }
                                    {
                                        stack
                                            ? (
                                                <S.Stack>
                                                    <AppDebounceInput
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInProjectBlock({
                                                                type: 'stack',
                                                                data: {
                                                                    id:   stack.id,
                                                                    text: event.target.value,
                                                                },
                                                                experienceId,
                                                                projectId: id,
                                                            });
                                                        } }
                                                        placeholder = 'Stack'
                                                        value = { stack.text }
                                                    />
                                                    <RemoveBtn handleRemoveFunc = { () => removeProjectFieldInBlock({
                                                        experienceId,
                                                        projectId: id,
                                                        type:      'stack',
                                                    }) }
                                                    />
                                                </S.Stack>
                                            )
                                            : null
                                    }
                                </S.Wrapper>
                                <S.BtnBox>
                                    <RemoveBtn
                                        handleRemoveFunc = { () => removeProjectBlock({
                                            data: project,
                                            id:   experienceId,
                                        }) }
                                    />
                                </S.BtnBox>
                                <AddBtn
                                    handleAddFunc = { () => addExpeienceProjectBlock(experienceId) }
                                    style = {{ marginBottom: '5px' }}
                                    text = 'project'
                                />
                            </S.Item>
                        );
                    })
                    }
                </S.List>
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'experience projects'
            handleAddFunc = { () => addExpeienceProject(experienceId) }
        />
    );
};
