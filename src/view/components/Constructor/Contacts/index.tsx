// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn } from '../../../elements';
import { ContactsState } from '../../../../bus/client/contactFields/types';

// Types
// import { ContactsState } from '../../../../bus/client/contactFields/types';

export const ConstructorContacts: FC = () => {
    const {
        contactFields,
        debounceChangeContactField, removeContactField,
    } = useContactField();

    const [ value, setInputValue ] = useState<null | ContactsState>(null);
    console.log('1');
    console.log(value);

    useEffect(() => {
        setInputValue(contactFields);
    }, []);

    const handleSetInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.dataset.customid;

        setInputValue((prevState) => {
            if (prevState && key) {
                prevState.forEach((el) => {
                    if (el.id === key) {
                        el.url = event.target.value;
                    }
                });
            }

            return prevState;
        });
    };

    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <ul>
                {contactFields.map((elem) => (
                    <S.Item
                        key = { elem.id }>
                        <S.SocialInput
                            // data-customid = { elem.id }
                            placeholder = { elem.id }
                            type = 'text'
                            value = { elem.url }
                            onChange = { (event) => {
                                // handleChangeFunc(event);
                                // handleSetInputValue(event);
                                handleSetInputValue(event);
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
