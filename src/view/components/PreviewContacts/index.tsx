// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn } from '../../elements';

// Types
import { contactItem } from '../../../bus/client/types';

type PropTypes = {
    contacts: Array<contactItem>;
    handleChangeContactUrl: (event: ChangeEvent<HTMLInputElement>, elem: contactItem) => void;
    handleRemoveContact: (id: string) => void;
}

export const PreviewContacts: FC<PropTypes> = ({ contacts, handleChangeContactUrl, handleRemoveContact }) => {
    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <ul>
                {contacts.map((elem) => (
                    <S.Item key = { elem.id }>
                        <S.SocialInput
                            defaultValue = { elem.url }
                            placeholder = { elem.placeholder }
                            type = 'text'
                            onChange = { (event) => handleChangeContactUrl(event, elem) }
                        />
                        <RemoveBtn handleRemoveFunc = { () => handleRemoveContact(elem.id) }/>
                    </S.Item>
                ))}
            </ul>
        </S.Container>
    );
};
