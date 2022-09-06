// Core
import { debounce, uniqueId } from 'lodash';

// Action
import { experienceFieldsActions } from './slice';

// Slice
import { initialState } from './slice';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Types
import { ExperienceData } from './types';

// Constant
import { WAIT_TIME } from '../../../init';

export const useExperienceFields = () => {
    const dispatch = useDispatch();
    const experienceFields = useSelector(({ experienceFields }) => experienceFields);

    const debounceSetExperiencePositionField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsCreatorAction({ type: 'position', value: data }));
    }, WAIT_TIME);

    const debounceSetExperienceDateField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsCreatorAction({ type: 'date', value: data }));
    }, WAIT_TIME);

    const debounceSetExperienceLocationField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsCreatorAction({ type: 'location', value: data }));
    }, WAIT_TIME);

    const debounceSetDescrField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsDescriptionCreatorAction({ type: 'description', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectNameField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'name', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectCustomerField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'customer', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectDurationField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'duration', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectRoleField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'role', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectResponsibilitiesField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'responsibilities', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectStackField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'stack', value: data }));
    }, WAIT_TIME);

    const debounceSetProjectTeamsizeField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'teamSize', value: data }));
    }, WAIT_TIME);

    const removeExperienceDescriptionField = debounce((id: string) => {
        dispatch(experienceFieldsActions.removeExperienceDescriptionField(id));
    }, WAIT_TIME);

    const addExperienceDescriptionField = debounce(() => {
        dispatch(experienceFieldsActions.addExperienceDescriptionField(
            { ...initialState[ 0 ].descriptionList[ 0 ], id: uniqueId() },
        ));
    }, WAIT_TIME);

    const removeExperienceProjectField = debounce((id: string) => {
        dispatch(experienceFieldsActions.removeExperienceProjectField(id));
    }, WAIT_TIME);

    const addExperienceProjectField = debounce(() => {
        dispatch(experienceFieldsActions.addExperienceProjectField(
            { ...initialState[ 0 ].projects[ 0 ], id: uniqueId() },
        ));
    }, WAIT_TIME);

    return {
        experienceFields,
        debounceSetExperiencePositionField,
        debounceSetExperienceDateField,
        debounceSetExperienceLocationField,
        debounceSetDescrField,
        debounceSetProjectNameField,
        debounceSetProjectCustomerField,
        debounceSetProjectDurationField,
        debounceSetProjectRoleField,
        debounceSetProjectResponsibilitiesField,
        debounceSetProjectStackField,
        debounceSetProjectTeamsizeField,
        removeExperienceDescriptionField,
        addExperienceDescriptionField,
        removeExperienceProjectField,
        addExperienceProjectField,
    };
};
