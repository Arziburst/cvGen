// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn } from '../../elements';

// Types
import { useContactField } from '../../../bus/client/contactFields';

export const PreviewContacts: FC = () => {
    const {
        contactFields,
        debounceChangeContactField, removeContactField,
    } = useContactField();

    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <ul>
                {contactFields.map((elem) => (
                    <S.Item key = { elem.id }>
                        <S.SocialInput
                            defaultValue = { elem.url }
                            placeholder = { '1' }
                            type = 'text'
                            onChange = { (event) => {
                                debounceChangeContactField({ ...elem, url: event.target.value });
                            }  }
                        />
                        <RemoveBtn handleRemoveFunc = { () => removeContactField(elem.id) }/>
                    </S.Item>
                ))}
            </ul>
        </S.Container>
    );
};
