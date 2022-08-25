// Init
import { debounce } from 'lodash';

// Core
import { ChangeEvent } from 'react';

// Bus
import { languagesItem, contactItem, useFieldsRedux, experienceItem, descriptionList } from '../../../bus/client/fields';

export const useCustomHooks = () => {
    const { setFieldsAction, setContactField, setLanguageField, removeLanguageField, createLanguageField,
        removeContactField, setExperienceField,
        fieldsRedux: { avatar, name, position, overview, contacts, languages, experience },
    } = useFieldsRedux();

    const debounceChangeName = debounce((text: string) => {
        setFieldsAction({ type: 'name', value: text });
    }, 300);

    const debounceChangeImg = debounce((img: string) => {
        setFieldsAction({ type: 'avatar', value: img });
    }, 300);

    const debounceChangePosition = debounce((position: string) => {
        setFieldsAction({ type: 'position', value: position });
    }, 300);

    const debounceChangeOverview = debounce((overview: string) => {
        setFieldsAction({ type: 'overview', value: overview });
    }, 300);

    const debounceChangeField = debounce((item: contactItem) => {
        setContactField({ type: 'contacts', value: item });
    }, 300);

    const debounceChangeLanguageField = debounce((item: languagesItem) => {
        setLanguageField({ type: 'languages', value: item });
    }, 300);

    const debounceRemoveLanguageField = debounce((id: string) => {
        removeLanguageField({ type: 'languages', value: id });
    }, 100);

    const debounceCreateLanguageField = debounce((id: string) => {
        createLanguageField({ type: 'languages', value: id });
    }, 100);

    const debounceRemoveContactField = debounce((id: string) => {
        removeContactField({ type: 'contacts', value: id });
    }, 100);

    const debounceChangeExperienceField = debounce((experience: experienceItem | experienceItem & descriptionList) => {
        setExperienceField({ type: 'contacts', value: experience });
    }, 300);

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
        debounceChangeField({ ...social, url: event.target.value });
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

    const handleChangeDescriptionList = (event: ChangeEvent<HTMLInputElement>, experience: experienceItem) => {
        // eslint-disable-next-line max-len
        debounceChangeExperienceField({ ...experience, description: event.target.value });
    };

    const handleRemoveLanguageField = (id: string) => {
        debounceRemoveLanguageField(id);
    };

    const handleCreateLanguageField = (id: string) => {
        debounceCreateLanguageField(id);
    };

    const handleRemoveContactField = (id: string) => {
        debounceRemoveContactField(id);
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
        experience,
        name,
        languages,
        contacts,
        avatar,
        position,
        overview,
    };
};
