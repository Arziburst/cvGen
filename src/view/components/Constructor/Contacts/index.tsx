// Core
import React, { FC, useRef } from 'react';

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

    const ref = useRef<Array<HTMLInputElement>>([]);

    const resetBtn = document.getElementById('resetBtn');
    console.log(ref);

    resetBtn?.addEventListener('click', () => {
        const inputArray = ref.current;

        for (let index = 0; index < inputArray.length; index++) {
            const element = inputArray[ index ];
            if (element) {
                element.value = '';
            }
        }
    });

    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <ul>
                {contactFields.map((elem, index) => (
                    <S.Item
                        key = { elem.id }>
                        <S.SocialInput
                            defaultValue = { elem.url }
                            placeholder = { elem.id }
                            ref = { (element) => {
                                if (element && ref.current) {
                                    ref.current[ index ] = element;
                                }
                            } }
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
