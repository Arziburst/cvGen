// Core
import React, { FC } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';

// Assets
import {
    svgPhoneIcon, svgHomeIcon, svgMailIcon,
    svgLinkedinIcon, svgGithubIcon,
} from '../../../../assets/images';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AppDebounceInput, AddBtn } from '../../../elements';

export const ConstructorContacts: FC = () => {
    const {
        handleChangeContactField, removeContactField,
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
                {contactFields.map((elem) => {
                    const getIconSrc = (type: string): string => {
                        let iconUrl = '';

                        if (type === 'mail') {
                            iconUrl = svgMailIcon;
                        } else if (type === 'phone') {
                            iconUrl = svgPhoneIcon;
                        } else if (type === 'adress') {
                            iconUrl = svgHomeIcon;
                        } else if (type === 'Linkedin') {
                            iconUrl = svgLinkedinIcon;
                        } else if (type === 'Github') {
                            iconUrl = svgGithubIcon;
                        }

                        return iconUrl;
                    };

                    return (
                        <S.Item
                            key = { elem.id }>
                            <S.InputIcon src = { getIconSrc(elem.id) } />
                            <AppDebounceInput
                                handleChangeFunc = { (event) => {
                                    handleChangeContactField({ ...elem, url: event.target.value });
                                } }
                                placeholder = { elem.id }
                                value = { elem.url }
                            />
                            <RemoveBtn handleRemoveFunc = { () => removeContactField(elem.id) } />
                        </S.Item>
                    );
                })
                }
            </ul>
        </S.Container>
    );
};
