// Core
import React, { FC } from 'react';

// Bus
import { useSkillFields } from '../../../../bus/client/skillFields';
import { useThemes } from '../../../../bus/client/themes';
import { AddBtn, AppDebounceInput, RemoveBtn, Title } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorSkills: FC = () => {
    const {
        skillFields, addSkillField,
        handleChangeSkillField, removeSkillField,
    } = useSkillFields();

    const { themes } = useThemes();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Skills' />
                <AddBtn handleAddFunc = { () => addSkillField() }/>
            </S.Box>
            <S.List>
                {skillFields.map(({ id, skill }) => (
                    <S.Item key = { id } >
                        <AppDebounceInput
                            decorElemColor = { themes.accent.bg }
                            handleChangeFunc = { (event) => {
                                handleChangeSkillField({ id, skill: event.target.value });
                            } }
                            placeholder = 'Your skill'
                            value = { skill }
                        />
                        <RemoveBtn handleRemoveFunc = { () => removeSkillField(id) }/>
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
};
