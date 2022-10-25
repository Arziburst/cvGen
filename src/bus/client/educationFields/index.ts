// Core
import { v4 as uuidv4 } from 'uuid';

// Slice
import { educationFieldsActions } from './slice';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Types
import { EducationFieldDate, EducationFieldValue, OptionsRemoveFieldInBlock } from './types';
import { educationInithialState } from './data';

export const useEducationField = () => {
    const dispatch = useDispatch();
    const educationFields = useSelector(({ educationFields }) => educationFields);

    const handleChangeFieldInBlock = (data: EducationFieldValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction(data));
    };

    const handleChangeDateField = (data: EducationFieldDate) => {
        dispatch(educationFieldsActions.changeDateField(data));
    };

    const removeEducationBlockField = (id: string) => {
        dispatch(educationFieldsActions.removeEducationBlockField(id));
    };

    const removeEducationFieldInBlock = (data: OptionsRemoveFieldInBlock) => {
        dispatch(educationFieldsActions.removeEducationFieldInBlock(data));
    };

    const addEducation = () => {
        dispatch(educationFieldsActions.addEducation(educationInithialState));
    };

    const addEducationBlock = () => {
        dispatch(educationFieldsActions.addEducationBlock({ id: uuidv4(), data: educationInithialState[ 0 ] }));
    };

    const resetEducationFieldsToInithialState = () => {
        dispatch(educationFieldsActions.resetEducationFields());
    };

    return {
        educationFields,
        handleChangeFieldInBlock,
        removeEducationBlockField,
        addEducation,
        addEducationBlock,
        resetEducationFieldsToInithialState,
        removeEducationFieldInBlock,
        handleChangeDateField,
    };
};

