// Core
import { debounce, uniqueId } from 'lodash';

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

    const debounceChangeEducationDateField = debounce((data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'date', value: data }));
    }, WAIT_TIME);

    const debounceChangeEducationDegreeField = debounce((data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'degree', value: data }));
    }, WAIT_TIME);

    const debounceChangeEducationDescriptionField = debounce((data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'description', value: data }));
    }, WAIT_TIME);

    const debounceRemoveEducationField = debounce((id: string) => {
        dispatch(educationFieldsActions.removeEducationField(id));
    }, WAIT_TIME);

    const debounceAddEducationField = debounce(() => {
        dispatch(educationFieldsActions.addEducationField(uniqueId()));
    }, WAIT_TIME);

    return {
        educationFields,
        debounceChangeEducationDateField,
        debounceChangeEducationDegreeField,
        debounceChangeEducationDescriptionField,
        debounceRemoveEducationField,
        debounceAddEducationField,
    };
};

