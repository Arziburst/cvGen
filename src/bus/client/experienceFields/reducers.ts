// Slice
import { initialState } from './slice';
// Types
import * as types from './types';

export const experienceFieldsCreatorAction: types.BaseContact<types.ExperienceOptions> = (state, action) => state.map(
    (experience) => {
        if (experience.id === action.payload.value.id) {
            return {
                ...experience,
                [ action.payload.type ]: action.payload.value.text,
            };
        }

        return experience;
    },
);

export const experienceFieldsDescriptionCreatorAction: types.BaseContact<types.ExperienceDescriptionOptions>
= (state, action) => state.map(
    (experience) => {
        return {
            ...experience,
            descriptionList: experience.descriptionList.map(
                (description) => {
                    if (description.id === action.payload.value.id) {
                        return {
                            ...description,
                            [ action.payload.type ]: action.payload.value.text,
                        };
                    }

                    return description;
                },
            ),

        };
    },
);

export const experienceFieldsProjectsCreatorAction: types.BaseContact<types.ExperienceProjectsOptions>
    = (state, action) => state.map(
        (experience) => {
            return {
                ...experience,
                projects: experience.projects.map(
                    (project) => {
                        if (project.id === action.payload.value.id) {
                            return {
                                ...project,
                                [ action.payload.type ]: action.payload.value.text,
                            };
                        }

                        return project;
                    },
                ),
            };
        },
    );

export const removeExperienceDescriptionField: types.BaseContact<string>
= (state, action) => state.map(
    (experience) => {
        return {
            ...experience,
            descriptionList: experience.descriptionList.filter(
                (description) => description.id !== action.payload,
            ),
        };
    },
);


export const addExperienceDescriptionField: types.BaseContact<types.DescriptionList>
    = (state, action) => state.map(
        (experience) => {
            return {
                ...experience,
                descriptionList: [ ...experience.descriptionList, action.payload ],
            };
        },
    );

export const addExperienceProjectField: types.BaseContact<types.Project>
    = (state, action) => state.map(
        (experience) => {
            return {
                ...experience,
                projects: [ ...experience.projects, action.payload ],
            };
        },
    );


export const removeExperienceProjectField: types.BaseContact<string>
    = (state, action) => state.map(
        (experience) => {
            return {
                ...experience,
                projects: experience.projects.filter(
                    (project) => project.id !== action.payload,
                ),
            };
        },
    );

export const resetToInitialstate = () => initialState;
