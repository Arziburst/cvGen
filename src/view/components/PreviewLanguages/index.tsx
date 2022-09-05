// Init
import { uniqueId } from 'lodash';

// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AddBtn } from '../../elements';

// Types
import { languagesItem } from '../../../bus/client/types';

type PropTypes = {
    languages: Array<languagesItem>;
    handleChangeLanguage: (event: ChangeEvent<HTMLInputElement>, elem: languagesItem) => void;
    handleRemoveLanguageField: (id: string) => void;
    handleCreateLanguageField: (id: string) => void;
}

export const PreviewLanguages: FC<PropTypes> = ({
    languages,
    handleChangeLanguage,
    handleRemoveLanguageField,
    handleCreateLanguageField,
}) => {
    return (
        <S.Container>
            <Title text = 'Languages'/>
            <ul>
                {
                    languages.map((language) => (
                        <S.Item key = { language.id }>
                            <S.LanguageInput
                                defaultValue = { language.language }
                                placeholder = { '1' }
                                type = 'text'
                                onChange = { (event) => handleChangeLanguage(event, language) }
                            />
                            <RemoveBtn handleRemoveFunc = { () => handleRemoveLanguageField(language.id) }/>
                        </S.Item>
                    ))
                }
            </ul>
            <AddBtn handleAddFunc = { () => handleCreateLanguageField(uniqueId()) } />
        </S.Container>
    );
};
