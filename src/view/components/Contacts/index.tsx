// Core
import React, { ChangeEvent, FC } from 'react';

// Styles
import * as S from './styles';

// Elements
import { Title } from '../../elements';
import { useFieldsRedux } from '../../../bus/client/fields';
import { debounce } from 'lodash';
import { socialItem } from '../../../bus/client/fields';
type PropTypes = {
}

export const Contacts: FC<PropTypes> = () => {
    const { fieldsRedux: { contacts }, setContactField } = useFieldsRedux();

    const debounceChangeField = debounce((item: socialItem) => {
        setContactField({ type: 'contacts', value: item });
    }, 300);

    const handleChangeFirstname = (event: ChangeEvent<HTMLInputElement>, elem: socialItem) => {
        debounceChangeField({ ...elem, url: event.target.value });
    };

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
                            onChange = { (event) => handleChangeFirstname(event, elem) }
                        />
                    </S.Item>
                ))}
            </ul>
        </S.Container>
    );
};
