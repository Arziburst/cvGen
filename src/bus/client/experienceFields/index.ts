// Core
import { uniqueId, cloneDeep } from 'lodash';

// Action
import { experienceFieldsActions } from './slice';

// Slice
import { initialState } from './slice';

// Tools
import { useDispatch, useSelector, useDebounce } from '../../../tools/hooks';

// Types
import { ExperienceData } from './types';

export const useExperienceFields = () => {
    const dispatch = useDispatch();
    const debounce = useDebounce();

    const experienceFields = useSelector(({ experienceFields }) => experienceFields);

    const debounceSetExperiencePositionField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsCreatorAction({ type: 'position', value: data }));
    });

    const debounceSetExperienceDateField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsCreatorAction({ type: 'date', value: data }));
    });

    const debounceSetExperienceLocationField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsCreatorAction({ type: 'location', value: data }));
    });

    const debounceSetDescrField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsDescriptionCreatorAction({ type: 'description', value: data }));
    });

    const debounceSetProjectNameField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'name', value: data }));
    });

    const debounceSetProjectCustomerField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'customer', value: data }));
    });

    const debounceSetProjectDurationField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'duration', value: data }));
    });

    const debounceSetProjectRoleField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'role', value: data }));
    });

    const debounceSetProjectResponsibilitiesField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'responsibilities', value: data }));
    });

    const debounceSetProjectStackField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'stack', value: data }));
    });

    const debounceSetProjectTeamsizeField = debounce((data: ExperienceData) => {
        dispatch(experienceFieldsActions.experienceFieldsProjectsCreatorAction({ type: 'teamSize', value: data }));
    });

    const removeExperienceField = (id: string) => {
        dispatch(experienceFieldsActions.removeExperienceField(id));
    };

    const removeExperienceDescriptionField = (id: string) => {
        dispatch(experienceFieldsActions.removeExperienceDescriptionField(id));
    };

    const cloneArray = cloneDeep(initialState);

    const addExperienceField = () => {
        dispatch(experienceFieldsActions.addExperienceField(cloneArray[ 0 ]));
    };

    const addExperienceDescriptionField = (id: string) => {
        dispatch(experienceFieldsActions.addExperienceDescriptionField(
            { description: { ...initialState[ 0 ].descriptionList[ 0 ], id: uniqueId() }, experienceId: id },
        ));
    };

    const removeExperienceProjectField = (id: string) => {
        dispatch(experienceFieldsActions.removeExperienceProjectField(id));
    };

    const addExperienceProjectField = (id: string) => {
        dispatch(experienceFieldsActions.addExperienceProjectField(
            { project: { ...initialState[ 0 ].projects[ 0 ], id: uniqueId() }, experienceId: id },
        ));
    };

    const resetExperienceFieldsToInithialState = () => {
        dispatch(experienceFieldsActions.resetExperienceFields(initialState));
    };

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
        addExperienceField,
        resetExperienceFieldsToInithialState,
        removeExperienceField,
    };
};
