// Init
import { debounce } from 'lodash';

// Core
import { ChangeEvent } from 'react';

// Bus
import { languagesItem, socialItem, useFieldsRedux } from '../../../bus/client/fields';

export const useCustomHooks = () => {
    const { setFieldsAction, setContactField, setLanguageField, removeLanguageField, createLanguageField,
        removeContactField,
        fieldsRedux: { avatar, name, position, overview, contacts, languages },
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

    const debounceChangeField = debounce((item: socialItem) => {
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

    const handleChangeContactField = (event: ChangeEvent<HTMLInputElement>, social: socialItem) => {
        debounceChangeField({ ...social, url: event.target.value });
    };

    const handleChangeLanguageField = (event: ChangeEvent<HTMLInputElement>, language: languagesItem) => {
        debounceChangeLanguageField({ ...language, language: event.target.value });
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
        name,
        languages,
        contacts,
        avatar,
        position,
        overview,
    };
};
