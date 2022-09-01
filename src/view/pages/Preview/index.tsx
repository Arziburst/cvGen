// Core
import React, { FC } from 'react';

// Bus
import { useTogglesRedux } from '../../../bus/client/toggles';

// Hooks
import { useCustomHooks } from './hooks';

// Components
import { ErrorBoundary, PreviewAvatar, PreviewInfo, PreviewContacts } from '../../components';

// Styles
import * as S from './styles';
import { PreviewLanguages } from '../../components/PreviewLanguages';
import { PreviewExperience } from '../../components/PreviewExperience';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    const {
        handleChangeImg, handleChangeName,
        handleChangePosition, handleCreateLanguageField,
        handleChangeOverview, handleChangeContactField,
        handleRemoveLanguageField, handleChangeLanguageField,
        handleRemoveContactField, handleChangeExperienceDate,
        handleChangeExperienceLocation, handleChangeExperiencePosition,
        handleChangeDescriptionList, handleRemoveExperienceField,
        handleAddExperienceField, handleChangeProjectsCustomer,
        handleChangeProjectsDuration, handleChangeProjectsName,
        handleChangeProjectsResponsibilities, handleChangeProjectsRole,
        handleChangeProjectsStack, handleChangeProjectsTeamSize,
        handleRemoveExperienceProjectField, handleAddExperienceProjectField,
        infoFieldsRedux, contactFieldRedux,
        languageFieldRedux, experienceFieldRedux,
    } = useCustomHooks();

    return (
        <S.Container>
            <S.Wrapper>
                <S.Column>
                    <PreviewAvatar
                        avatarUrl = { infoFieldsRedux.avatar }
                        handleChangeImg = { handleChangeImg }
                    />
                </S.Column>
                <S.Column>
                    <PreviewInfo
                        handleChangeName = { handleChangeName }
                        handleChangeOverview = { handleChangeOverview }
                        handleChangePosition = { handleChangePosition }
                        name = { infoFieldsRedux.name }
                        overview = { infoFieldsRedux.overview }
                        position = { infoFieldsRedux.position }
                    />
                </S.Column>
            </S.Wrapper>
            <S.Wrapper>
                <S.SecondColumn>
                    <PreviewContacts
                        contacts = { contactFieldRedux }
                        handleChangeContactUrl = { handleChangeContactField }
                        handleRemoveContact = { handleRemoveContactField }
                    />
                    <PreviewLanguages
                        handleChangeLanguage = { handleChangeLanguageField }
                        handleCreateLanguageField = { handleCreateLanguageField }
                        handleRemoveLanguageField = { handleRemoveLanguageField }
                        languages = { languageFieldRedux }
                    />
                </S.SecondColumn>
                <S.SecondColumn>
                    <PreviewExperience
                        experience = { experienceFieldRedux }
                        handleAddDescField = { handleAddExperienceField }
                        handleAddProject = { handleAddExperienceProjectField }
                        handleChangeDate = { handleChangeExperienceDate }
                        handleChangeLocation = { handleChangeExperienceLocation }
                        handleChangePosition = { handleChangeExperiencePosition }
                        handleChangeProjectsCustomer = { handleChangeProjectsCustomer }
                        handleChangeProjectsDuration = { handleChangeProjectsDuration }
                        handleChangeProjectsName = { handleChangeProjectsName }
                        handleChangeProjectsResponsibilities = { handleChangeProjectsResponsibilities }
                        handleChangeProjectsRole = { handleChangeProjectsRole }
                        handleChangeProjectsStack = { handleChangeProjectsStack }
                        handleChangeProjectsTeamSize = { handleChangeProjectsTeamSize }
                        handleDescription = { handleChangeDescriptionList }
                        handleRemoveProject = { handleRemoveExperienceProjectField }
                        projects = { experienceFieldRedux[ 0 ].projects }
                        removeDescrField = { handleRemoveExperienceField }
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
