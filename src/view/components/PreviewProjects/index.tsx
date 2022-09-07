// Core
import React, { FC } from 'react';

// Bus
import { useExperienceFields } from '../../../bus/client/experienceFields';

// Styles
import * as S from './styles';

// Elements
import { AddBtn, AppInput, AppTextarea, RemoveBtn } from '../../elements';

//Types
import { Project } from '../../../bus/client/experienceFields/types';
type propTypes = {
    projects: Array<Project>
    experienceId: string;
}

export const PreviewProjects: FC<propTypes> = ({ projects, experienceId }) => {
    const {
        debounceSetProjectCustomerField,
        debounceSetProjectDurationField, debounceSetProjectNameField,
        debounceSetProjectResponsibilitiesField, debounceSetProjectRoleField,
        debounceSetProjectStackField, debounceSetProjectTeamsizeField,
        addExperienceProjectField, removeExperienceProjectField,
    } = useExperienceFields();

    return (
        <S.Container>
            <S.TitleBox>
                <S.Title>
                    Projects
                </S.Title>
                <AddBtn handleAddFunc = { () => addExperienceProjectField(experienceId) } />
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
                                <S.Name>
                                    <AppInput
                                        defaultValue = { name }
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectNameField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Name'
                                    />
                                </S.Name>
                                <S.Customer>
                                    <AppInput
                                        defaultValue = { customer }
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectCustomerField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Customer'
                                    />
                                </S.Customer>
                                <S.Box>
                                    <S.Role>
                                        <AppInput
                                            defaultValue = { role }
                                            handleChangeFunc = { (event) => {
                                                debounceSetProjectRoleField({ id, text: event.target.value });
                                            } }
                                            placeholder = 'Role'
                                        />
                                    </S.Role>
                                    <S.Duration>
                                        <AppInput
                                            defaultValue = { duration }
                                            handleChangeFunc = { (event) => {
                                                debounceSetProjectDurationField(
                                                    { id, text: event.target.value },
                                                );
                                            } }
                                            placeholder = 'Duration'
                                        />
                                    </S.Duration>
                                </S.Box>
                                <S.Responsibilities>
                                    <AppTextarea
                                        defaultValue = { responsibilities }
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectResponsibilitiesField(
                                                { id, text: event.target.value },
                                            );
                                        } }
                                        placeholder = 'Responsibilities'
                                    />
                                </S.Responsibilities>
                                <S.TeamSize>
                                    <AppInput
                                        defaultValue = { teamSize }
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectTeamsizeField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Teamsize'
                                    />
                                </S.TeamSize>
                                <S.Stack>
                                    <AppInput
                                        defaultValue = { stack }
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectStackField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Stack'
                                    />
                                </S.Stack>
                            </S.Wrapper>
                            <RemoveBtn handleRemoveFunc = { () => removeExperienceProjectField(id) } />
                        </S.Item>
                    );
                })
                }
            </S.List>
        </S.Container>
    );
};
