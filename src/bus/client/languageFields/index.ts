// Core
import { uniqueId } from 'lodash';

// Actions
import { initialState, languageFieldsActions } from './slice';

// Tools
import { useSelector, useDispatch, useDebounce } from '../../../tools/hooks';

// Types
import { Language } from './types';

export const useLanguageFields = () => {
    const dispatch = useDispatch();
    const debounce = useDebounce();

    const languageFields = useSelector(({ languageFields }) => languageFields);

    const debounceChangeLanguageField = debounce((language: Language) => {
        dispatch(languageFieldsActions.setLanguageFields({ type: 'language', value: language }));
    });

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
        debounceChangeLanguageField,
        removeLanguageField,
        addLanguageField,
        resetLanguageFieldsToInithialState,
    };
};
