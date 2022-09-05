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
import { PreviewEducation } from '../../components/PreviewEducation';

const Root: FC = () => {
    const { setToggleAction } = useTogglesRedux();

    const {
        handleCreateLanguageField, handleRemoveLanguageField, handleChangeLanguageField,
        handleChangeExperienceDate, handleRemoveEducationDateField,
        handleChangeExperienceLocation, handleChangeExperiencePosition,
        handleChangeDescriptionList, handleRemoveExperienceField,
        handleAddExperienceField, handleChangeProjectsCustomer,
        handleChangeProjectsDuration, handleChangeProjectsName,
        handleChangeProjectsResponsibilities, handleChangeProjectsRole,
        handleChangeProjectsStack, handleChangeProjectsTeamSize,
        handleRemoveExperienceProjectField, handleAddExperienceProjectField,
        handleChangeEducationDateField, handleChangeEducationDegreeField,
        handleChangeEducationDescriptionField, handleAddEducationField,
        experienceFieldRedux, languageFields, educationFields,
    } = useCustomHooks();

    return (
        <S.Container>
            <S.Wrapper>
                <S.Column>
                    <PreviewAvatar />
                </S.Column>
                <S.Column>
                    <PreviewInfo />
                </S.Column>
            </S.Wrapper>
            <S.Wrapper>
                <S.SecondColumn>
                    <PreviewContacts />
                    <PreviewLanguages
                        handleChangeLanguage = { handleChangeLanguageField }
                        handleCreateLanguageField = { handleCreateLanguageField }
                        handleRemoveLanguageField = { handleRemoveLanguageField }
                        languages = { languageFields }
                    />
                </S.SecondColumn>
                <S.SecondColumn>
                    <PreviewEducation
                        educations = { educationFields }
                        handleAddDescriptionField = { handleAddEducationField }
                        handleChangeDateField = { handleChangeEducationDateField }
                        handleChangeDegreeField = { handleChangeEducationDegreeField }
                        handleChangeDescriptionField = { handleChangeEducationDescriptionField }
                        handleRemoveDescriptionField = { handleRemoveEducationDateField }
                    />
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
