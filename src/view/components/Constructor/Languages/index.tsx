// Core
import React, { FC } from 'react';

// Bus
import { useLanguageFields } from '../../../../bus/client/languageFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AddBtn, AppDebounceInput } from '../../../elements';
import { useThemes } from '../../../../bus/client/themes';

export const ConstructorLanguages: FC = () => {
    const {
        languageFields, handleChangeLanguageField,
        addLanguageField, removeLanguageField,
    } = useLanguageFields();

    const { themes } = useThemes();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Languages' />
                <AddBtn handleAddFunc = { () => addLanguageField() } />
            </S.Box>
            <ul>
                {
                    languageFields.map((language) => (
                        <S.Item key = { language.id }>
                            <AppDebounceInput
                                decorElemColor = { themes.accent.bgPrimary }
                                handleChangeFunc = { (event) => {
                                    handleChangeLanguageField({ id: language.id, language: event.target.value });
                                }  }
                                placeholder = 'Language...'
                                value = { language.language }
                            />
                            <RemoveBtn handleRemoveFunc = { () => removeLanguageField(language.id) }/>
                        </S.Item>
                    ))
                }
            </ul>
        </S.Container>
    );
};
