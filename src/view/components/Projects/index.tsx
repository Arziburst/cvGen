// Core
import React, { FC } from 'react';

// Bus
import { inputVoidFunc, textareaVoidFunc } from '../../../bus/client/types';
import { project } from '../../../bus/client/types';

// Styles
import * as S from './styles';

// Elements
import { AddBtn, AppInput, AppTextarea, RemoveBtn } from '../../elements';

// Types
type PropTypes = {
    projects: Array<project>;
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

export const Projects: FC<PropTypes> = (props) => {
    const {
        projects,
        handleChangeProjectsName,
        handleChangeProjectsCustomer,
        handleChangeProjectsRole,
        handleChangeProjectsDuration,
        handleChangeProjectsResponsibilities,
        handleChangeProjectsTeamSize,
        handleChangeProjectsStack,
        handleRemoveProject,
        handleAddProject,
    } = props;

    return (
        <S.Container>
            <S.Title>
                Projects
            </S.Title>
            <S.List>
                {projects.map((project) => {
                    const {
                        name, customer, duration,
                        responsibilities, role,
                        stack, teamSize, id,
                    } = project;

                    return (
                        <S.Item key = { id }>
                            <S.Wrapper>
                                <S.Name>
                                    <AppInput
                                        defaultValue = { name }
                                        handleChangeFunc = { (event) => {
                                            handleChangeProjectsName(event, project);
                                        } }
                                        placeholder = 'Name'
                                    />
                                </S.Name>
                                <S.Customer>
                                    <AppInput
                                        defaultValue = { customer }
                                        handleChangeFunc = { (event) => {
                                            handleChangeProjectsCustomer(event, project);
                                        } }
                                        placeholder = 'Customer'
                                    />
                                </S.Customer>
                                <S.Box>
                                    <S.Role>
                                        <AppInput
                                            defaultValue = { role }
                                            handleChangeFunc = { (event) => {
                                                handleChangeProjectsRole(event, project);
                                            } }
                                            placeholder = 'Role'
                                        />
                                    </S.Role>
                                    <S.Duration>
                                        <AppInput
                                            defaultValue = { duration }
                                            handleChangeFunc = { (event) => {
                                                handleChangeProjectsDuration(event, project);
                                            } }
                                            placeholder = 'Duration'
                                        />
                                    </S.Duration>
                                </S.Box>
                                <S.Responsibilities>
                                    <AppTextarea
                                        defaultValue = { responsibilities }
                                        handleChangeFunc = { (event) => {
                                            handleChangeProjectsResponsibilities(event, project);
                                        } }
                                        placeholder = 'Responsibilities'
                                    />
                                </S.Responsibilities>
                                <S.TeamSize>
                                    <AppInput
                                        defaultValue = { teamSize }
                                        handleChangeFunc = { (event) => {
                                            handleChangeProjectsTeamSize(event, project);
                                        } }
                                        placeholder = 'Teamsize'
                                    />
                                </S.TeamSize>
                                <S.Stack>
                                    <AppInput
                                        defaultValue = { stack }
                                        handleChangeFunc = { (event) => {
                                            handleChangeProjectsStack(event, project);
                                        } }
                                        placeholder = 'Stack'
                                    />
                                </S.Stack>
                            </S.Wrapper>
                            <RemoveBtn handleRemoveFunc = { () => handleRemoveProject(id) }/>
                        </S.Item>
                    );
                })}
            </S.List>
            <AddBtn handleAddFunc = { handleAddProject } />
        </S.Container>
    );
};
