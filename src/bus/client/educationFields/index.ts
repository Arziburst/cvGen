// Core
import { uniqueId } from 'lodash';

// Tools
import { useDebounce, useDispatch, useSelector } from '../../../tools/hooks';

// Actions
import { educationFieldsActions, initialState } from './slice';

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

    const removeEducationField = (id: string) => {
        dispatch(educationFieldsActions.removeEducationField(id));
    };

    const addEducationField = () => {
        dispatch(educationFieldsActions.addEducationField(uniqueId()));
    };

    const resetEducationFieldsToInithialState = () => {
        dispatch(educationFieldsActions.resetEducationFields(initialState));
    };


    return {
        educationFields,
        debounceChangeEducationDateField,
        debounceChangeEducationDegreeField,
        debounceChangeEducationDescriptionField,
        removeEducationField,
        addEducationField,
        resetEducationFieldsToInithialState,
    };
};

