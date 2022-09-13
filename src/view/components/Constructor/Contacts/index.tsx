// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn } from '../../../elements';
import { Contact, ContactsState } from '../../../../bus/client/contactFields/types';

// Types
// import { ContactsState } from '../../../../bus/client/contactFields/types';

export const ConstructorContacts: FC = () => {
    const {
        debounceChangeContactField, removeContactField,
        contactFields,
    } = useContactField();

    const [ value, setInputValue ] = useState<null | ContactsState>(null);
    console.log('1');
    console.log(value);

    useEffect(() => {
        setInputValue(contactFields);
    }, []);

    const handleSetInputValue = (event: React.ChangeEvent<HTMLInputElement>, elem: Contact) => {
        const key = event.target.dataset.customid;
        const text = event.target.value;

        setInputValue((prevState) => {
            console.log('sad', prevState, key);
            let newState: ContactsState = [];
            if (prevState && key) {
                newState = prevState.map((el) => {
                    if (el.id === key) {
                        el.url = text;
                    }

                    return el;
                });
                console.log('prevstate', prevState);

                debounceChangeContactField({ ...elem, url: event.target.value });

                return newState;
            }

            return prevState;
        });
    };

    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <ul>
                {value?.map((elem) => (
                    <S.Item
                        key = { elem.id }>
                        <S.SocialInput
                            data-customid = { elem.id }
                            placeholder = { elem.id }
                            type = 'text'
                            value = { elem.url }
                            onChange = { (event) => {
                                // handleChangeFunc(event);
                                // handleSetInputValue(event);
                                handleSetInputValue(event, elem);
                            }  }
                        />
                        <RemoveBtn handleRemoveFunc = { () => removeContactField(elem.id) }/>
                    </S.Item>
                ))}
            </ul>
        </S.Container>
    );
};
