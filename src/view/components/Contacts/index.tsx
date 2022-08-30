// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Assets
import deleteIcon from '../../../assets/images/delete-icon.svg';

// Elements
import { Title } from '../../elements';

// Types
import { contactItem } from '../../../bus/client/types';

type PropTypes = {
    contacts: Array<contactItem>;
    handleChangeContactUrl: (event: ChangeEvent<HTMLInputElement>, elem: contactItem) => void;
    handleRemoveContact: (id: string) => void;
}

export const Contacts: FC<PropTypes> = ({ contacts, handleChangeContactUrl, handleRemoveContact }) => {
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
                        <S.RemoveBtn onClick = { () => handleRemoveContact(elem.id) }>
                            <img
                                src = { deleteIcon }
                            />
                        </S.RemoveBtn>
                    </S.Item>
                ))}
            </ul>
        </S.Container>
    );
};
