// Slice
import { uniqueId } from 'lodash';
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

export const removeExperienceField: types.BaseContact<string>
    = (state, action) => state.filter(
        (experience) => experience.id !== action.payload,
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

export const addExperienceDescriptionField: types.BaseContact<types.DescriptionListData>
    = (state, action) => state.map(
        (experience) => {
            if (experience.id === action.payload.experienceId) {
                return {
                    ...experience,
                    descriptionList: [ ...experience.descriptionList, action.payload.description ],
                };
            }

            return experience;
        },
    );

export const addExperienceField: types.BaseContact<types.Experience>
    = (state, action) => [
        ...state,
        {
            ...action.payload,
            id:              uniqueId(),
            descriptionList: action.payload.descriptionList.map((descr) => {
                return {
                    ...descr,
                    id: uniqueId(),
                };
            }),
            projects: action.payload.projects.map((project) => {
                return {
                    ...project,
                    id: uniqueId(),
                };
            }),
        },
    ];

export const addExperienceProjectField: types.BaseContact<types.ProjectData>
    = (state, action) => state.map(
        (experience) => {
            if (action.payload.experienceId === experience.id) {
                return {
                    ...experience,
                    projects: [ ...experience.projects, action.payload.project ],
                };
            }

            return experience;
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

export const resetExperienceFields: types.BaseContact<types.ExperienceFieldsState> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state = [ ...action.payload ];

    return action.payload;
};

