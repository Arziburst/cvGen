// Core
import React, { FC } from 'react';

// Bus
import { useLanguageFields } from '../../../../bus/client/languageFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AddBtn } from '../../../elements';

export const ConstructorLanguages: FC = () => {
    const {
        languageFields, debounceChangeLanguageField,
        debounceCreateLanguageField, debounceRemoveLanguageField,
    } = useLanguageFields();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Languages' />
                <AddBtn handleAddFunc = { () => debounceCreateLanguageField() } />
            </S.Box>
            <ul>
                {
                    languageFields.map((language) => (
                        <S.Item key = { language.id }>
                            <S.LanguageInput
                                defaultValue = { language.language }
                                placeholder = { 'Language...' }
                                type = 'text'
                                onChange = { (event) => {
                                    debounceChangeLanguageField({ id: language.id, language: event.target.value });
                                }  }
                            />
                            <RemoveBtn handleRemoveFunc = { () => debounceRemoveLanguageField(language.id) }/>
                        </S.Item>
                    ))
                }
            </ul>
        </S.Container>
    );
};
