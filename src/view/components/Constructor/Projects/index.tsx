// Core
import React, { FC } from 'react';

// Bus
import { useExperienceFields } from '../../../../bus/client/experienceFields';

// Styles
import * as S from './styles';

// Elements
import { AddBtn, AppInput, AppTextarea, RemoveBtn } from '../../../elements';

//Types
import { Project } from '../../../../bus/client/experienceFields/types';
type propTypes = {
    projects: Array<Project>
    experienceId: string;
}

export const ConstructorProjects: FC<propTypes> = ({ projects, experienceId }) => {
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
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectNameField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Name'
                                        value = { name }
                                    />
                                </S.Name>
                                <S.Customer>
                                    <AppInput
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectCustomerField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Customer'
                                        value = { customer }
                                    />
                                </S.Customer>
                                <S.Box>
                                    <S.Role>
                                        <AppInput
                                            handleChangeFunc = { (event) => {
                                                debounceSetProjectRoleField({ id, text: event.target.value });
                                            } }
                                            placeholder = 'Role'
                                            value = { role }
                                        />
                                    </S.Role>
                                    <S.Duration>
                                        <AppInput
                                            handleChangeFunc = { (event) => {
                                                debounceSetProjectDurationField(
                                                    { id, text: event.target.value },
                                                );
                                            } }
                                            placeholder = 'Duration'
                                            value = { duration }
                                        />
                                    </S.Duration>
                                </S.Box>
                                <S.Responsibilities>
                                    <AppTextarea
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectResponsibilitiesField(
                                                { id, text: event.target.value },
                                            );
                                        } }
                                        placeholder = 'Responsibilities'
                                        value = { responsibilities }
                                    />
                                </S.Responsibilities>
                                <S.TeamSize>
                                    <AppInput
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectTeamsizeField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Teamsize'
                                        value = { teamSize }
                                    />
                                </S.TeamSize>
                                <S.Stack>
                                    <AppInput
                                        handleChangeFunc = { (event) => {
                                            debounceSetProjectStackField({ id, text: event.target.value });
                                        } }
                                        placeholder = 'Stack'
                                        value = { stack }
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
