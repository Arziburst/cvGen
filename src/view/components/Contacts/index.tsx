// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Elements
import { Title } from '../../elements';

type ContactLink = {
    id: string;
    url: string;
    placeholder: string;
}

type PropTypes = {
    contacts: Array<ContactLink>;
    removeItemFunc: (id: string) => void;
}

export const Contacts: FC<PropTypes> = ({ contacts, removeItemFunc }) => {
    return (
        <S.Container>
            <Title text = 'Contacts'/>
            <S.List>
                {contacts.map((item) => (
                    <S.Item key = { item.id }>
                        {/* <AppInput
                            defaultValue = { item.url }
                            handleChangeFunc = { inputChangeFunc }
                            placeholder = { item.placeholder }
                        /> */}
                        <S.RemoveBtn onClick = { () => removeItemFunc(item.id) } />
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
};
