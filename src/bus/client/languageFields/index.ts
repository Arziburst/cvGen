// Core
import { uniqueId } from 'lodash';

// Actions
import { initialState, languageFieldsActions } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';

// Types
import { Language } from './types';

export const useLanguageFields = () => {
    const dispatch = useDispatch();

    const languageFields = useSelector(({ languageFields }) => languageFields);

    const handleChangeLanguageField = (language: Language) => {
        dispatch(languageFieldsActions.setLanguageFields({ type: 'language', value: language }));
    };

    const removeLanguageField = (id: string) => {
        dispatch(languageFieldsActions.removeLanguageFields(id));
    };

    const addLanguageField = () => {
        dispatch(languageFieldsActions.addLanguageFields(uniqueId()));
    };

    const resetLanguageFieldsToInithialState = () => {
        dispatch(languageFieldsActions.resetLanguageFields(initialState));
    };

    return {
        languageFields,
        handleChangeLanguageField,
        removeLanguageField,
        addLanguageField,
        resetLanguageFieldsToInithialState,
    };
};
