// Core
import { debounce } from 'lodash';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Actions
import { educationFieldsActions } from './slice';

// Constant
import { WAIT_TIME } from '../../../init';

// Types
import { OptionsValue } from './types';

export const useEducationField = () => {
    const dispatch = useDispatch();
    const educationFields = useSelector(({ educationFields }) => educationFields);

    const debounceChangeEducationField = debounce((date: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'date', value: date }));
    }, WAIT_TIME);

    const debounceRemoveEducationField = debounce((id: string) => {
        dispatch(educationFieldsActions.removeEducationField(id));
    }, WAIT_TIME);

    const debounceAddEducationField = debounce((id: string) => {
        dispatch(educationFieldsActions.addEducationField(id));
    }, WAIT_TIME);

    return {
        educationFields,
        debounceChangeEducationField,
        debounceRemoveEducationField,
        debounceAddEducationField,
    };
};

