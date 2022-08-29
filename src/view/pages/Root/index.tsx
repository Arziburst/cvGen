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
import { Experience } from '../../components/Experience';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    const {
        handleChangeImg, handleChangeName,
        handleChangePosition, handleCreateLanguageField,
        handleChangeOverview, handleChangeContactField,
        handleRemoveLanguageField, handleChangeLanguageField,
        handleRemoveContactField, handleChangeExperienceDate,
        handleChangeExperienceLocation, handleChangeExperiencePosition,
        handleChangeDescriptionList,
        avatar, position, overview,
        contactFieldRedux, languages,
        name, experience,
    } = useCustomHooks();
    console.log(experience);

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
                        contacts = { contactFieldRedux }
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
                    <Experience
                        experience = { experience }
                        handleChangeDate = { handleChangeExperienceDate }
                        handleChangeLocation = { handleChangeExperienceLocation }
                        handleChangePosition = { handleChangeExperiencePosition }
                        handleDescription = { handleChangeDescriptionList }
                    />
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
