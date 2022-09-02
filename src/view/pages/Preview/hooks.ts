// Core
import { ChangeEvent } from 'react';
import { useExperienceHooksRedux } from '../../../bus/client/experienceFields';

// Bus
import { useLanguageHooksRedux } from '../../../bus/client/languageFields';
import { useInfoFieldHooksRedux } from '../../../bus/client/infoFields';
import { useEducationHooksRedux } from '../../../bus/client/educationFields';

// Types
import { languagesItem, experienceItem, descriptionList, project } from '../../../bus/client/types';

export const useCustomHooks = () => {
    const {
        infoFieldsRedux, debounceChangeImg,
        debounceChangeName, debounceChangeOverview,
        debounceChangePosition,
    } = useInfoFieldHooksRedux();

    const {
        experienceFieldRedux, debounceChangeExperienceFieldAction,
        debounceChangeExperienceDescrField, debounceRemoveExperienceDescrField,
        debounceAddExperienceDescrField, debounceChangeProjectsFieldAction,
        debounceAddExperienceProjectField, debounceRemoveExperienceProjectField,
    } = useExperienceHooksRedux();

    const {
        languageFieldRedux, debounceChangeLanguageField,
        debounceCreateLanguageField, debounceRemoveLanguageField,
    } = useLanguageHooksRedux();

    const {
        educationFieldRedux, debounceChangeDateField,
        debounceChangeDegreeField, debounceChangeDescriptionField,
        debounceRemoveEducationField, debounceAddEducationField,
    } = useEducationHooksRedux();

    const handleChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);

        if (file) {
            debounceChangeImg(URL.createObjectURL(file));
        }
    };

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangeName(event.target.value);
    };

    const handleChangePosition = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangePosition(event.target.value);
    };

    const handleChangeOverview = (event: ChangeEvent<HTMLTextAreaElement>) => {
        debounceChangeOverview(event.target.value);
    };

    const handleChangeLanguageField = (event: ChangeEvent<HTMLInputElement>, language: languagesItem) => {
        debounceChangeLanguageField({ ...language, language: event.target.value });
    };

    const handleChangeExperienceDate = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceFieldAction({ ...experience, date: event.target.value }, 'date');
    };

    const handleChangeExperiencePosition = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceFieldAction({ ...experience, position: event.target.value }, 'position');
    };

    const handleChangeExperienceLocation = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceFieldAction({ ...experience, location: event.target.value }, 'location');
    };

    const handleChangeProjectsName = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, name: event.target.value });
    };

    const handleChangeProjectsCustomer = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, customer: event.target.value });
    };

    const handleChangeProjectsDuration = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, duration: event.target.value });
    };

    const handleChangeProjectsRole = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, role: event.target.value });
    };

    const handleChangeProjectsResponsibilities = (event: ChangeEvent<HTMLTextAreaElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, responsibilities: event.target.value });
    };

    const handleChangeProjectsTeamSize = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, teamSize: event.target.value });
    };

    const handleChangeProjectsStack = (event: ChangeEvent<HTMLInputElement>, project: project) => {
        debounceChangeProjectsFieldAction({ ...project, stack: event.target.value });
    };

    const handleChangeDescriptionList = (event: ChangeEvent<HTMLTextAreaElement>, description: descriptionList) => {
        debounceChangeExperienceDescrField({ ...description, description: event.target.value });
    };

    const handleRemoveLanguageField = (id: string) => {
        debounceRemoveLanguageField(id);
    };

    const handleChangeEducationDateField = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangeDateField(event.target.value);
    };

    const handleChangeEducationDegreeField = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangeDegreeField(event.target.value);
    };
    const handleChangeEducationDescriptionField = (event: ChangeEvent<HTMLTextAreaElement>) => {
        debounceChangeDescriptionField(event.target.value);
    };

    const handleCreateLanguageField = (id: string) => {
        debounceCreateLanguageField(id);
    };

    const handleRemoveExperienceField = (id: string) => {
        debounceRemoveExperienceDescrField(id);
    };

    const handleAddExperienceField = () => {
        debounceAddExperienceDescrField();
    };

    const handleRemoveExperienceProjectField = (id: string) => {
        debounceRemoveExperienceProjectField(id);
    };
    const handleRemoveEducationDateField = (id: string) => {
        debounceRemoveEducationField(id);
    };

    const handleAddExperienceProjectField = () => {
        debounceAddExperienceProjectField();
    };

    const handleAddEducationField = () => {
        debounceAddEducationField();
    };

    return {
        handleChangeImg,
        handleChangeName,
        handleChangePosition,
        handleChangeOverview,
        handleChangeLanguageField,
        handleRemoveLanguageField,
        handleCreateLanguageField,
        handleChangeExperienceDate,
        handleChangeExperiencePosition,
        handleChangeExperienceLocation,
        handleChangeDescriptionList,
        handleRemoveExperienceField,
        handleAddExperienceField,
        handleChangeProjectsName,
        handleChangeProjectsCustomer,
        handleChangeProjectsDuration,
        handleChangeProjectsRole,
        handleChangeProjectsResponsibilities,
        handleChangeProjectsTeamSize,
        handleChangeProjectsStack,
        handleRemoveExperienceProjectField,
        handleAddExperienceProjectField,
        handleChangeEducationDateField,
        handleChangeEducationDegreeField,
        handleChangeEducationDescriptionField,
        handleRemoveEducationDateField,
        handleAddEducationField,
        infoFieldsRedux,
        experienceFieldRedux,
        languageFieldRedux,
        educationFieldRedux,
    };
};
