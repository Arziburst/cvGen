// Init
import { uniqueId } from 'lodash';

// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Assets
import deleteIcon from '../../../assets/images/delete-icon.svg';

// Elements
import { Title } from '../../elements';

// Types
import { languagesItem } from '../../../bus/client/fields';

type PropTypes = {
    languages: Array<languagesItem>
    handleChangeLanguage: (event: ChangeEvent<HTMLInputElement>, elem: languagesItem) => void;
    handleRemoveLanguageField: (id: string) => void;
    handleCreateLanguageField: (id: string) => void;
}

export const Languages: FC<PropTypes> = ({ languages, handleChangeLanguage, handleRemoveLanguageField,
    handleCreateLanguageField }) => {
    return (
        <S.Container>
            <Title text = 'Languages'/>
            <ul>
                {
                    languages.map((language) => (
                        <S.Item key = { language.id }>
                            <S.LanguageInput
                                defaultValue = { language.language }
                                placeholder = { language.placeholder }
                                type = 'text'
                                onChange = { (event) => handleChangeLanguage(event, language) }
                            />
                            <S.RemoveBtn onClick = { () => handleRemoveLanguageField(language.id) }>
                                <img
                                    src = { deleteIcon }
                                />
                            </S.RemoveBtn>
                        </S.Item>
                    ))
                }
            </ul>
            <S.AddBtn onClick = { () => handleCreateLanguageField(uniqueId()) }>Add</S.AddBtn>
        </S.Container>
    );
};
