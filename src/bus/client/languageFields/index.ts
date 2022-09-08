// Core
import { uniqueId } from 'lodash';

// Actions
import { languageFieldsActions } from './slice';

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

    const debounceRemoveLanguageField = debounce((id: string) => {
        dispatch(languageFieldsActions.removeLanguageFields(id));
    });

    const debounceCreateLanguageField = debounce(() => {
        dispatch(languageFieldsActions.addLanguageFields(uniqueId()));
    });

    return {
        languageFields,
        debounceChangeLanguageField,
        debounceRemoveLanguageField,
        debounceCreateLanguageField,
    };
};
