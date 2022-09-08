// Core
import React, { FC } from 'react';

// Bus
import { useSkills } from '../../../../bus/client/skillFields';
import { AddBtn, AppInput, RemoveBtn, Title } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorSkills: FC = () => {
    const {
        skills, addSkillField,
        debounceChangeSkillField, removeSkillField,
    } = useSkills();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Skills' />
                <AddBtn handleAddFunc = { () => addSkillField() }/>
            </S.Box>
            <S.List>
                {skills.map(({ id, skill }) => (
                    <S.Item key = { id } >
                        <AppInput
                            defaultValue = { skill }
                            handleChangeFunc = { (event) => {
                                debounceChangeSkillField({ id, skill: event.target.value });
                            } }
                            placeholder = 'Your skill'
                        />
                        <RemoveBtn handleRemoveFunc = { () => removeSkillField(id) }/>
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
};
