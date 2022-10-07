// Action
import { experienceFieldsActions } from './slice';

// Slice
import { experienceInithialState, descriptionInihialState } from './data';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Types
import { ExperienceCreatorAction, ExperienceDescrCreatorAction } from './types';
import { uniqueId } from 'lodash';

export const useExperienceFields = () => {
    const dispatch = useDispatch();
    const experienceFields = useSelector(({ experienceFields }) => experienceFields);

    const handleChangeFieldInExperienceBlock = (data: ExperienceCreatorAction) => {
        dispatch(experienceFieldsActions.experienceFieldCreatorAction(data));
    };

    const handleChangeFieldInDescrBlock = (data: ExperienceDescrCreatorAction) => {
        dispatch(experienceFieldsActions.changeDescrFieldText(data));
    };

    const addExpeience = () => {
        dispatch(experienceFieldsActions.addExperience(experienceInithialState));
    };

    const addExpeienceDescr = (id: string) => {
        dispatch(experienceFieldsActions.addExperienceDescr({ data: descriptionInihialState, id }));
    };


    const addDescrFieldInBlock = (id: string) => {
        dispatch(experienceFieldsActions.addDescrFieldInBlock({ data: {
            ...descriptionInihialState,
            id: uniqueId(),
        }, id }));
    };

    const removeDesc = (id: string) => {
        dispatch(experienceFieldsActions.removeDescr(id));
    };

    const removeDescFieldInBlock = (data: ExperienceDescrCreatorAction) => {
        dispatch(experienceFieldsActions.removeDescrFieldInBlock(data));
    };

    const resetExperienceFields = () => {
        dispatch(experienceFieldsActions.resetExperienceFields());
    };

    return {
        experienceFields,
        addExpeience,
        resetExperienceFields,
        handleChangeFieldInExperienceBlock,
        addExpeienceDescr,
        removeDesc,
        removeDescFieldInBlock,
        addDescrFieldInBlock,
        handleChangeFieldInDescrBlock,
    };
};
