// Core
import { uniqueId } from 'lodash';

// Tools
import { useDebounce, useDispatch, useSelector } from '../../../tools/hooks';

// Actions
import { educationFieldsActions } from './slice';

// Types
import { OptionsValue } from './types';

export const useEducationField = () => {
    const dispatch = useDispatch();
    const debounce = useDebounce();
    const educationFields = useSelector(({ educationFields }) => educationFields);

    const debounceChangeEducationDateField = debounce((data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'date', value: data }));
    });

    const debounceChangeEducationDegreeField = debounce((data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'degree', value: data }));
    });

    const debounceChangeEducationDescriptionField = debounce((data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'description', value: data }));
    });

    const debounceRemoveEducationField = debounce((id: string) => {
        dispatch(educationFieldsActions.removeEducationField(id));
    });

    const debounceAddEducationField = debounce(() => {
        dispatch(educationFieldsActions.addEducationField(uniqueId()));
    });

    return {
        educationFields,
        debounceChangeEducationDateField,
        debounceChangeEducationDegreeField,
        debounceChangeEducationDescriptionField,
        debounceRemoveEducationField,
        debounceAddEducationField,
    };
};

