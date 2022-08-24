// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Assets
import deleteIcon from '../../../assets/images/delete-icon.svg';

// Elements
import { Title } from '../../elements';

// Types
import { socialItem } from '../../../bus/client/fields';

type PropTypes = {
    contacts: Array<socialItem>;
    handleChangeContactUrl: (event: ChangeEvent<HTMLInputElement>, elem: socialItem) => void;
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
