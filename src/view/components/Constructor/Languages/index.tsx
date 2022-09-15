// Core
import React, { FC } from 'react';

// Bus
import { useLanguageFields } from '../../../../bus/client/languageFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AddBtn, AppInput } from '../../../elements';

export const ConstructorLanguages: FC = () => {
    const {
        languageFields, debounceChangeLanguageField,
        addLanguageField, removeLanguageField,
    } = useLanguageFields();

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
                            <AppInput
                                handleChangeFunc = { (event) => {
                                    debounceChangeLanguageField({ id: language.id, language: event.target.value });
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
