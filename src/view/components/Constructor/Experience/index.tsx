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
import { AddBtn, AddFieldBlockBtn, AppDebounceInput, AppDebounceTextarea, RemoveBtn, Title } from '../../../elements';

export const ConstructorExperience: FC = () => {
    const {
        experienceFields,
        addExpeience,
        resetExperienceFields,
        handleChangeFieldInExperienceBlock,
        addExpeienceDescr,
        handleChangeFieldInDescrBlock,
        removeDesc,
        removeDescFieldInBlock,
        addDescrFieldInBlock,
    } = useExperienceFields();

    const { themes } = useThemes();
    if (experienceFields) {
        return (
            <S.Container>
                <S.TextBox>
                    <Title text = 'Experience' />
                    <RemoveBtn handleRemoveFunc = { () => resetExperienceFields() } />
                </S.TextBox>
                <S.Inner>
                    {experienceFields.map(({ date, location, position, id, descriptionList, projects }) => (
                        <S.Box key = { id }>
                            <S.Info>
                                <AppDebounceInput
                                    decorElemColor = { themes.accent.bgSecond }
                                    handleChangeFunc = { (event) => {
                                        handleChangeFieldInExperienceBlock({
                                            data: {
                                                ...position,
                                                text: event.target.value,
                                            },
                                            id,
                                            type: 'position',
                                        });
                                    } }
                                    placeholder = 'Your position'
                                    value = { position.text }
                                />
                                <AppDebounceInput
                                    decorElemColor = { themes.accent.bgSecond }
                                    handleChangeFunc = { (event) => {
                                        handleChangeFieldInExperienceBlock({
                                            data: {
                                                ...date,
                                                text: event.target.value,
                                            },
                                            id,
                                            type: 'date',
                                        });
                                    } }
                                    placeholder = 'Sept. 2016 - Present'
                                    value = { date.text }
                                />
                            </S.Info>
                            <S.Location>
                                <AppDebounceInput
                                    decorElemColor = { themes.accent.bgSecond }
                                    handleChangeFunc = { (event) => {
                                        handleChangeFieldInExperienceBlock({
                                            data: {
                                                ...location,
                                                text: event.target.value,
                                            },
                                            id,
                                            type: 'location',
                                        });
                                    } }
                                    placeholder = 'Company & location'
                                    value = { location.text }
                                />
                            </S.Location>
                            {
                                descriptionList
                                    ? (
                                        <S.List>
                                            <S.TitleBox>
                                                <Title text = 'Description' />
                                                <RemoveBtn handleRemoveFunc = { () => removeDesc(id) } />
                                            </S.TitleBox>
                                            {descriptionList.map((description) => (
                                                <S.Item key = { description.id }>
                                                    <AppDebounceTextarea
                                                        decorElemColor = { themes.accent.bgSecond }
                                                        handleChangeFunc = { (event) => {
                                                            handleChangeFieldInDescrBlock({
                                                                data: {
                                                                    id:          description.id,
                                                                    description: event.target.value,
                                                                },
                                                                id,
                                                            });
                                                        } }
                                                        placeholder = 'Your descr'
                                                        value = { description.description }
                                                    />
                                                    <RemoveBtn
                                                        handleRemoveFunc = { () => removeDescFieldInBlock({
                                                            data: {
                                                                id:          description.id,
                                                                description: description.description,
                                                            },
                                                            id,
                                                        }) }
                                                        key = { id }
                                                    />
                                                </S.Item>
                                            ))}
                                            <AddBtn
                                                handleAddFunc = { () => addDescrFieldInBlock(id) }
                                                style = {{ marginBottom: '5px' }}
                                                text = 'description'
                                            />
                                        </S.List>
                                    ) : (
                                        <AddFieldBlockBtn
                                            fieldName = 'experience description'
                                            handleAddFunc = { () => addExpeienceDescr(id) }
                                        />
                                    )
                            }
                            <ConstructorProjects
                                experienceId = { id }
                                projects = { projects }
                            />
                        </S.Box>
                    ))}
                </S.Inner>
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'experiences'
            handleAddFunc = { () => addExpeience() }
        />
    );
};
