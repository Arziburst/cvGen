// Core
import React, { FC } from 'react';

// Bus
import { useContactField } from '../../../../bus/client/contactFields';
import { useThemes } from '../../../../bus/client/themes';

// Assets
import {
    svgPhoneIcon, svgHomeIcon, svgMailIcon,
    svgLinkedinIcon, svgGithubIcon,
} from '../../../../assets/images';

// Styles
import * as S from './styles';

// Elements
import { Title, RemoveBtn, AppDebounceInput, AddBtn, AddFieldBlockBtn } from '../../../elements';

export const ConstructorContacts: FC = () => {
    const {
        contactFields,
        addContactFields,
        handleChangeContactField,
        removeContactField,
        addContact,
        resetContactFieldsToInithialState,
    } = useContactField();

    const { themes } = useThemes();
    const getIconSrc = (type: string): string => {
        let iconUrl = '';

        if (type === 'mail') {
            iconUrl = svgMailIcon;
        } else if (type === 'phone') {
            iconUrl = svgPhoneIcon;
        } else if (type === 'address') {
            iconUrl = svgHomeIcon;
        } else if (type === 'linkedin') {
            iconUrl = svgLinkedinIcon;
        } else if (type === 'github') {
            iconUrl = svgGithubIcon;
        }

        return iconUrl;
    };

    if (contactFields) {
        const {
            address, github,
            linkedin,
            mail,
            phone,
        } = contactFields;

        return (
            <S.Container>
                <S.Box>
                    <Title text = 'Contacts' />
                    <RemoveBtn handleRemoveFunc = { () => resetContactFieldsToInithialState() }/>
                </S.Box>
                <ul>
                    <S.Item
                        key = { mail.id }>
                        <S.InputIcon src = { getIconSrc('mail') } />
                        <AppDebounceInput
                            decorElemColor = { themes.accent.bgPrimary }
                            handleChangeFunc = { (event) => {
                                handleChangeContactField({
                                    data: {
                                        ...mail,
                                        url: event.target.value,
                                    },
                                    type: 'mail',
                                });
                            } }
                            placeholder = { 'mail' }
                            value = { mail.url }
                        />
                    </S.Item>
                    {
                        address
                            ? (
                                <S.Item
                                    key = { address.id }>
                                    <S.InputIcon src = { getIconSrc('address') } />
                                    <AppDebounceInput
                                        decorElemColor = { themes.accent.bgPrimary }
                                        handleChangeFunc = { (event) => {
                                            handleChangeContactField({
                                                data: {
                                                    ...address,
                                                    url: event.target.value,
                                                },
                                                type: 'address',
                                            });
                                        } }
                                        placeholder = { 'address' }
                                        value = { address.url }
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => removeContactField('address') } />
                                </S.Item>
                            ) : null
                    }
                    {
                        phone
                            ? (
                                <S.Item
                                    key = { phone.id }>
                                    <S.InputIcon src = { getIconSrc('phone') } />
                                    <AppDebounceInput
                                        decorElemColor = { themes.accent.bgPrimary }
                                        handleChangeFunc = { (event) => {
                                            handleChangeContactField({
                                                data: {
                                                    ...phone,
                                                    url: event.target.value,
                                                },
                                                type: 'phone',
                                            });
                                        } }
                                        placeholder = { 'phone' }
                                        value = { phone.url }
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => removeContactField('phone') } />
                                </S.Item>
                            )
                            : null
                    }
                    {
                        linkedin
                            ? (
                                <S.Item
                                    key = { linkedin.id }>
                                    <S.InputIcon src = { getIconSrc('linkedin') } />
                                    <AppDebounceInput
                                        decorElemColor = { themes.accent.bgPrimary }
                                        handleChangeFunc = { (event) => {
                                            handleChangeContactField({
                                                data: {
                                                    ...linkedin,
                                                    url: event.target.value,
                                                },
                                                type: 'linkedin',
                                            });
                                        } }
                                        placeholder = { 'linkedin' }
                                        value = { linkedin.url }
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => removeContactField('linkedin') } />
                                </S.Item>
                            ) : null
                    }
                    {
                        github
                            ? (
                                <S.Item
                                    key = { github.id }>
                                    <S.InputIcon src = { getIconSrc('github') } />
                                    <AppDebounceInput
                                        decorElemColor = { themes.accent.bgPrimary }
                                        handleChangeFunc = { (event) => {
                                            handleChangeContactField({
                                                data: {
                                                    ...github,
                                                    url: event.target.value,
                                                },
                                                type: 'github',
                                            });
                                        } }
                                        placeholder = { 'github' }
                                        value = { github.url }
                                    />
                                    <RemoveBtn handleRemoveFunc = { () => removeContactField('github') } />
                                </S.Item>
                            )
                            : null
                    }
                </ul>
                {
                    address === null
                        ? (
                            <AddBtn
                                handleAddFunc = { () => addContactFields('address') }
                                text = 'address'
                            />
                        )
                        : null
                }
                {
                    phone === null
                        ? (
                            <AddBtn
                                handleAddFunc = { () => addContactFields('phone') }
                                text = 'phone'
                            />
                        )
                        : null
                }
                {
                    linkedin === null
                        ? (
                            <AddBtn
                                handleAddFunc = { () => addContactFields('linkedin') }
                                text = 'linkedin'
                            />
                        )
                        : null
                }
                {
                    github === null
                        ? (
                            <AddBtn
                                handleAddFunc = { () => addContactFields('github') }
                                text = 'github'
                            />
                        )
                        : null
                }
            </S.Container>
        );
    }

    return (
        <AddFieldBlockBtn
            fieldName = 'contacts'
            handleAddFunc = { () => addContact() }
        />
    );
};
