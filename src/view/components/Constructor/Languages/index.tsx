// Core
import React, { FC } from 'react';

// Bus
import { useFields } from '../../../../bus/client/fields';
import { useThemes } from '../../../../bus/client/themes';

// Slice
import { languageInithialState } from '../../../../bus/client/fields/data';

// Elements
import { Title, RemoveBtn, AppDebounceInput, AddFieldBlockBtn, AddBtn } from '../../../elements';

// Styles
import * as S from './styles';

export const ConstructorLanguages: FC = () => {
    const {
        fields: { languages },
        addFieldBlock,
        changeFieldTextInBlock,
        removeFieldBlock,
        removeFieldInBlock,
        addFieldInBlock,
    } = useFields();

    const { themes } = useThemes();

    if (languages) {
        return (
            <S.Container>
                <S.Box>
                    <Title text = { languages.title } />
                    <RemoveBtn handleRemoveFunc = { () => removeFieldBlock('languages')  }  />
                </S.Box>
                <ul>
                    {
                        languages.items.map((language) => (
                            <S.Item key = { language.id }>
                                <AppDebounceInput
                                    decorElemColor = { themes.accent.bgPrimary }
                                    handleChangeFunc = { (event) => {
                                        changeFieldTextInBlock({ id: language.id, data: event.target.value, type: 'languages' });
                                    } }
                                    placeholder = { languages.title }
                                    value = { language.text }
                                />
                                <RemoveBtn handleRemoveFunc = { () => removeFieldInBlock({ type: 'languages', id: language.id }) } />
                            </S.Item>
                        ))
                    }
                </ul>
                <AddBtn
                    handleAddFunc = { () => addFieldInBlock({ type: 'languages', data: languageInithialState.items[ 0 ] }) }
                    text = 'language'
                />
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'languages'
            handleAddFunc = { () => addFieldBlock({ type: 'languages', data: languageInithialState }) }
        />
    );
};
