// Core
import React, { FC } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AppInput, AddBtn } from '../../../elements';

export const ConstructorContacts: FC = () => {
    const {
        debounceChangeContactField, removeContactField,
        contactFields, addContactFields,
    } = useContactField();

    return (
        <S.Container>
            <S.Box>
                <Title text = 'Contacts' />
                <AddBtn
                    disabled = { contactFields.length === 5 }
                    handleAddFunc = { () => addContactFields() }
                />
            </S.Box>
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
