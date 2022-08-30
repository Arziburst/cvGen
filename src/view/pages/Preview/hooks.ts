// Core
import { ChangeEvent } from 'react';
import { useContactHooksRedux } from '../../../bus/client/contactFields';
import { useExperienceHooksRedux } from '../../../bus/client/experienceFields';

// Bus
import { useLanguageHooksRedux } from '../../../bus/client/languageFields';
import { useInfoFieldHooksRedux } from '../../../bus/client/infoFields';

// Types
import { languagesItem, contactItem, experienceItem, descriptionList } from '../../../bus/client/types';

export const useCustomHooks = () => {
    const {
        infoFieldsRedux, debounceChangeImg,
        debounceChangeName, debounceChangeOverview,
        debounceChangePosition,
    } = useInfoFieldHooksRedux();

    const {
        contactFieldRedux, debounceChangeContactField,
        debounceRemoveContactField,
    } = useContactHooksRedux();

    const {
        experienceFieldRedux, debounceChangeExperienceField,
        debounceChangeExperienceDescrField,
    } = useExperienceHooksRedux();

    const {
        languageFieldRedux, debounceChangeLanguageField,
        debounceCreateLanguageField, debounceRemoveLanguageField,
    } = useLanguageHooksRedux();

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

    const handleChangeContactField = (event: ChangeEvent<HTMLInputElement>, social: contactItem) => {
        debounceChangeContactField({ ...social, url: event.target.value });
    };

    const handleRemoveContactField = (id: string) => {
        debounceRemoveContactField(id);
    };

    const handleChangeLanguageField = (event: ChangeEvent<HTMLInputElement>, language: languagesItem) => {
        debounceChangeLanguageField({ ...language, language: event.target.value });
    };

    const handleChangeExperienceDate = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceField({ ...experience, date: event.target.value });
    };

    const handleChangeExperiencePosition = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceField({ ...experience, position: event.target.value });
    };

    const handleChangeExperienceLocation = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        debounceChangeExperienceField({ ...experience, location: event.target.value });
    };

    const handleChangeDescriptionList = (event: ChangeEvent<HTMLInputElement>, description: descriptionList) => {
        debounceChangeExperienceDescrField({ ...description, description: event.target.value });
    };

    const handleRemoveLanguageField = (id: string) => {
        debounceRemoveLanguageField(id);
    };

    const handleCreateLanguageField = (id: string) => {
        debounceCreateLanguageField(id);
    };

    return {
        handleChangeImg,
        handleChangeName,
        handleChangePosition,
        handleChangeOverview,
        handleChangeContactField,
        handleChangeLanguageField,
        handleRemoveLanguageField,
        handleCreateLanguageField,
        handleRemoveContactField,
        handleChangeExperienceDate,
        handleChangeExperiencePosition,
        handleChangeExperienceLocation,
        handleChangeDescriptionList,
        infoFieldsRedux,
        experienceFieldRedux,
        languageFieldRedux,
        contactFieldRedux,
    };
};
