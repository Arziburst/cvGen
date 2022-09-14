// Core
import React, { FC } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn } from '../../../elements';

export const ConstructorContacts: FC = () => {
    const {
        debounceChangeContactField, removeContactField,
        contactFields,
    } = useContactField();

    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <ul>
                {contactFields.map((elem) => (
                    <S.Item
                        key = { elem.id }>
                        <S.SocialInput
                            placeholder = { elem.id }
                            type = 'text'
                            value = { elem.url }
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
