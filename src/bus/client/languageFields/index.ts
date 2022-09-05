// Core
import { debounce } from 'lodash';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks'; /* Typed selector */
import { languageFieldsActions } from './slice';

// Types
import { Language } from './types';

// Constant
import { WAIT_TIME } from '../../../init';


export const useLanguageFields = () => {
    const dispatch = useDispatch();
    const languageFields = useSelector(({ languageFields }) => languageFields);

    const debounceChangeLanguageField = debounce((language: Language) => {
        dispatch(languageFieldsActions.setLanguageFields(language));
    }, WAIT_TIME);

    const debounceRemoveLanguageField = debounce((id: string) => {
        dispatch(languageFieldsActions.removeLanguageFields(id));
    }, WAIT_TIME);

    const debounceCreateLanguageField = debounce((id: string) => {
        dispatch(languageFieldsActions.addLanguageFields(id));
    }, WAIT_TIME);

    return {
        languageFields,
        debounceChangeLanguageField,
        debounceRemoveLanguageField,
        debounceCreateLanguageField,
    };
};
