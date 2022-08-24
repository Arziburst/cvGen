// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Hooks
import { useCustomHooks } from './hooks';

// Components
import { ErrorBoundary, Avatar, Info, Contacts } from '../../components';

// Styles
import * as S from './styles';
import { Languages } from '../../components/Languages';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    const {
        handleChangeImg, handleChangeName,
        handleChangePosition, handleCreateLanguageField,
        handleChangeOverview, handleChangeContactField,
        handleRemoveLanguageField, handleChangeLanguageField,
        handleRemoveContactField,
        avatar, position, overview,
        contacts, languages,
        name,
    } = useCustomHooks();

    return (
        <S.Container>
            <S.Wrapper>
                <S.Column>
                    <Avatar
                        avatarUrl = { avatar }
                        handleChangeImg = { handleChangeImg }
                    />
                </S.Column>
                <S.Column>
                    <Info
                        handleChangeName = { handleChangeName }
                        handleChangeOverview = { handleChangeOverview }
                        handleChangePosition = { handleChangePosition }
                        name = { name }
                        overview = { overview }
                        position = { position }
                    />
                </S.Column>
            </S.Wrapper>
            <S.Wrapper>
                <S.SecondColumn>
                    <Contacts
                        contacts = { contacts }
                        handleChangeContactUrl = { handleChangeContactField }
                        handleRemoveContact = { handleRemoveContactField }
                    />
                    <Languages
                        handleChangeLanguage = { handleChangeLanguageField }
                        handleCreateLanguageField = { handleCreateLanguageField }
                        handleRemoveLanguageField = { handleRemoveLanguageField }
                        languages = { languages }
                    />
                </S.SecondColumn>
                <S.SecondColumn>
                    {/* Content */}
                </S.SecondColumn>
            </S.Wrapper>
            <button
                style = {{ position: 'absolute', left: '15px', right: '15px', width: '80px', height: '100px' }}
                onClick = { () => {
                    setToggleAction({ type: 'isReadyCV', value: true });
                } }>
                Gen cv
            </button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
