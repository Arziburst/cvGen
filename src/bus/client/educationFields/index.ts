// Core
import { uniqueId } from 'lodash';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Actions
import { educationFieldsActions, initialState } from './slice';

// Types
import { OptionsValue } from './types';

export const useEducationField = () => {
    const dispatch = useDispatch();
    const educationFields = useSelector(({ educationFields }) => educationFields);

    const handleChangeEducationDateField = (data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'date', value: data }));
    };

    const handleChangeEducationDegreeField = (data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'degree', value: data }));
    };

    const handleChangeEducationDescriptionField = (data: OptionsValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction({ type: 'description', value: data }));
    };

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
        handleChangeEducationDateField,
        handleChangeEducationDegreeField,
        handleChangeEducationDescriptionField,
        removeEducationField,
        addEducationField,
        resetEducationFieldsToInithialState,
    };
};

