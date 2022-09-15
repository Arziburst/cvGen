// Core
import React, { FC } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AppInput } from '../../../elements';

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
                        <AppInput
                            handleChangeFunc = { (event) => {
                                debounceChangeContactField({ ...elem, url: event.target.value });
                            }  }
                            placeholder = { elem.id }
                            value = { elem.url }
                        />
                        <RemoveBtn handleRemoveFunc = { () => removeContactField(elem.id) }/>
                    </S.Item>
                ))}
            </ul>
        </S.Container>
    );
};
