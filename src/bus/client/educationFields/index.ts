// Slice
import { educationFieldsActions } from './slice';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Types
import { EducationFieldValue, OptionsRemoveFieldInBlock } from './types';
import { educationInithialState } from './data';
import { uniqueId } from 'lodash';

export const useEducationField = () => {
    const dispatch = useDispatch();
    const educationFields = useSelector(({ educationFields }) => educationFields);

    const handleChangeFieldInBlock = (data: EducationFieldValue) => {
        dispatch(educationFieldsActions.educationFieldCreatorAction(data));
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
        dispatch(educationFieldsActions.addEducationBlock({ id: uniqueId(), data: educationInithialState[ 0 ] }));
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
    };
};

