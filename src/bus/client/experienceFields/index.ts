// Action
import { experienceFieldsActions } from './slice';

// Slice
import { experienceInithialState, descriptionInihialState, projectInithialState } from './data';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Types
import { ExperienceCreatorAction, ExperienceDescrCreatorAction, ExperienceProjectCreatorAction, ExperienceProjectCreatorActionSecond, ExperienceProjectRemoveField, ExperienceDateCreatorAction } from './types';
import { uniqueId } from 'lodash';

export const useExperienceFields = () => {
    const dispatch = useDispatch();
    const experienceFields = useSelector(({ experienceFields }) => experienceFields);

    const handleChangeFieldInExperienceBlock = (data: ExperienceCreatorAction) => {
        dispatch(experienceFieldsActions.experienceFieldCreatorAction(data));
    };

    const handleChangeExperienceDateField = (data: ExperienceDateCreatorAction) => {
        dispatch(experienceFieldsActions.experienceFieldDate(data));
    };

    const handleChangeFieldInDescrBlock = (data: ExperienceDescrCreatorAction) => {
        dispatch(experienceFieldsActions.changeDescrFieldText(data));
    };

    const handleChangeFieldInProjectBlock = (data: ExperienceProjectCreatorActionSecond) => {
        dispatch(experienceFieldsActions.projectFieldCreatorAction(data));
    };

    const addExpeience = () => {
        dispatch(experienceFieldsActions.addExperience(experienceInithialState));
    };

    const addExpeienceDescr = (id: string) => {
        dispatch(experienceFieldsActions.addExperienceDescr({ data: descriptionInihialState, id }));
    };

    const addExpeienceProject = (id: string) => {
        dispatch(experienceFieldsActions.addExperienceProject({ data: projectInithialState, id }));
    };

    const addExpeienceProjectBlock = (id: string) => {
        dispatch(experienceFieldsActions.addProjectBlock({ data: {
            ...projectInithialState,
            id: uniqueId(),
        }, id }));
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

    const removeProject = (id: string) => {
        dispatch(experienceFieldsActions.removeProject(id));
    };


    const removeProjectFieldInBlock = (data: ExperienceProjectRemoveField) => {
        dispatch(experienceFieldsActions.removeProjectFieldInBlock(data));
    };

    const removeDescFieldInBlock = (data: ExperienceDescrCreatorAction) => {
        dispatch(experienceFieldsActions.removeDescrFieldInBlock(data));
    };

    const removeProjectBlock = (data: ExperienceProjectCreatorAction) => {
        dispatch(experienceFieldsActions.removeProjectBlock(data));
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
        addExpeienceProject,
        removeProject,
        removeProjectBlock,
        handleChangeFieldInProjectBlock,
        addExpeienceProjectBlock,
        removeProjectFieldInBlock,
        handleChangeExperienceDateField,
    };
};
