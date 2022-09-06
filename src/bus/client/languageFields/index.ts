// Core
import { debounce, uniqueId } from 'lodash';

// Actions
import { languageFieldsActions } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';

// Types
import { Language } from './types';

// Constant
import { WAIT_TIME } from '../../../init';


export const useLanguageFields = () => {
    const dispatch = useDispatch();
    const languageFields = useSelector(({ languageFields }) => languageFields);

    const debounceChangeLanguageField = debounce((language: Language) => {
        dispatch(languageFieldsActions.setLanguageFields({ type: 'language', value: language }));
    }, WAIT_TIME);

    const debounceRemoveLanguageField = debounce((id: string) => {
        dispatch(languageFieldsActions.removeLanguageFields(id));
    }, WAIT_TIME);

    const debounceCreateLanguageField = debounce(() => {
        dispatch(languageFieldsActions.addLanguageFields(uniqueId()));
    }, WAIT_TIME);

    return {
        languageFields,
        debounceChangeLanguageField,
        debounceRemoveLanguageField,
        debounceCreateLanguageField,
    };
};
