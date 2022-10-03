// Core
import React, { FC } from 'react';
import { useFields } from '../../../../bus/client/fields';

// Bus
import { useThemes } from '../../../../bus/client/themes';
import { AddBtn, AddFieldBlockBtn, AppDebounceInput, RemoveBtn, Title } from '../../../elements';

// Slice
import { skillsInithialState } from '../../../../bus/client/fields/data';

// Styles
import * as S from './styles';

export const ConstructorSkills: FC = () => {
    const {
        fields: { skills },
        addFieldInBlock,
        addFieldBlock,
        changeFieldTextInBlock,
        removeFieldBlock,
        removeFieldInBlock,
    } = useFields();

    const { themes } = useThemes();

    if (skills) {
        return (
            <S.Container>
                <S.Box>
                    <Title text = 'Skills' />
                    <RemoveBtn handleRemoveFunc = { () => removeFieldBlock('skills') } />
                </S.Box>
                <S.List listLength = { skills.items.length }>
                    {skills.items.map(({ id, text }) => (
                        <S.Item key = { id } >
                            <AppDebounceInput
                                decorElemColor = { themes.accent.bg }
                                handleChangeFunc = { (event) => {
                                    changeFieldTextInBlock({ type: 'skills', id, data: event.target.value });
                                } }
                                placeholder = 'Your skill'
                                value = { text }
                            />
                            <RemoveBtn handleRemoveFunc = { () => removeFieldInBlock({ type: 'skills', id }) } />
                        </S.Item>
                    ))}
                    <AddBtn
                        handleAddFunc = { () => addFieldInBlock({ type: 'skills', data: skillsInithialState.items[ 0 ] }) }
                        text = 'skills'
                    />
                </S.List>
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'skills'
            handleAddFunc = { () => addFieldBlock({ type: 'skills', data: skillsInithialState }) }
        />
    );
};
