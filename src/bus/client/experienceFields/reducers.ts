// Types
import * as types from './types';

export const experienceFieldCreatorAction: types.BaseContact<types.ExperienceCreatorAction>
= (state, action) => state?.map(
    (experience) => {
        if (experience.id === action.payload.id) {
            return {
                ...experience,
                [ action.payload.type ]: {
                    ...action.payload.data,
                },
            };
        }

        return experience;
    },
);

export const projectFieldCreatorAction: types.BaseContact<types.ExperienceProjectCreatorActionSecond>
    = (state, action) => state?.map(
        (experience) => {
            if (experience.id === action.payload.id && experience.projects !== null) {
                return {
                    ...experience,
                    projects: experience.projects.map((project) => {
                        return {
                            ...project,
                            [ action.payload.type ]: {
                                ...action.payload.data,
                            },
                        };
                    }),

                };
            }

            return experience;
        },
    );

export const changeDescrFieldText: types.BaseContact<types.ExperienceDescrCreatorAction>
    = (state, action) => state?.map((experience) => {
        if (action.payload.id === experience.id) {
            return {
                ...experience,
                descriptionList:
                experience.descriptionList
                    ? experience.descriptionList.map((descr) => {
                        if (descr.id === action.payload.data.id) {
                            return {
                                ...descr,
                                description: action.payload.data.description,
                            };
                        }

                        return descr;
                    }) : null,
            };
        }

        return experience;
    });

export const addExperience: types.BaseContact<types.ExperienceFullData> = (state, action) => {
    if (state === null) {
        return [ action.payload ];
    }

    return state;
};

// eslint-disable-next-line max-len
export const addExperienceDescr: types.BaseContact<types.ExperienceDescrCreatorAction> = (state, action) => state?.map((experience) => {
    if (action.payload.id === experience.id) {
        return {
            ...experience,
            descriptionList: [ action.payload.data ],
        };
    }

    return experience;
});

// eslint-disable-next-line max-len
export const addExperienceProject: types.BaseContact<types.ExperienceProjectCreatorAction> = (state, action) => state?.map((experience) => {
    if (action.payload.id === experience.id) {
        return {
            ...experience,
            projects: [ action.payload.data ],
        };
    }

    return experience;
});


// eslint-disable-next-line max-len
export const addDescrFieldInBlock: types.BaseContact<types.ExperienceDescrCreatorAction> = (state, action) => state?.map((experience) => {
    if (action.payload.id === experience.id) {
        if (experience.descriptionList) {
            return {
                ...experience,
                descriptionList: [ ...experience.descriptionList, action.payload.data ],
            };
        }

        return experience;
    }

    return experience;
});

// eslint-disable-next-line max-len
export const addProjectBlock: types.BaseContact<types.ExperienceProjectCreatorAction> = (state, action) => state?.map((experience) => {
    if (action.payload.id === experience.id) {
        if (experience.projects) {
            return {
                ...experience,
                projects: [ ...experience.projects, action.payload.data ],
            };
        }

        return experience;
    }

    return experience;
});

// eslint-disable-next-line max-len
export const removeDescr: types.BaseContact<string> = (state, action) => state?.map((experience) => {
    if (action.payload === experience.id) {
        return {
            ...experience,
            descriptionList: null,
        };
    }

    return experience;
});

// eslint-disable-next-line max-len
export const removeProject: types.BaseContact<string> = (state, action) => state?.map((experience) => {
    if (action.payload === experience.id) {
        return {
            ...experience,
            projects: null,
        };
    }

    return experience;
});

// eslint-disable-next-line max-len
export const removeDescrFieldInBlock: types.BaseContact<types.ExperienceDescrCreatorAction> = (state, action) => state?.map((experience) => {
    if (action.payload.id === experience.id) {
        if (experience.descriptionList) {
            const filterArray = experience.descriptionList.filter(
                (description) => description.id !== action.payload.data.id,
            );

            const descrListState = filterArray.length === 0 ? null : filterArray;

            return {
                ...experience,
                descriptionList: descrListState,
            };
        }
    }

    return experience;
});

// eslint-disable-next-line max-len
export const removeProjectBlock: types.BaseContact<types.ExperienceProjectCreatorAction> = (state, action) => state?.map((experience) => {
    if (action.payload.id === experience.id) {
        if (experience.projects) {
            const filterArray = experience.projects.filter(
                (project) => project.id !== action.payload.data.id,
            );

            const projetcListState = filterArray.length === 0 ? null : filterArray;

            return {
                ...experience,
                projects: projetcListState,
            };
        }
    }

    return experience;
});

// eslint-disable-next-line max-len
export const removeProjectFieldInBlock: types.BaseContact<types.ExperienceProjectRemoveField> = (state, action) => state?.map((experience) => {
    if (action.payload.experienceId === experience.id) {
        if (experience.projects) {
            const array = experience.projects
                .map(
                    (project) => {
                        if (project.id === action.payload.projectId) {
                            return {
                                ...project,
                                [ action.payload.type ]: null,
                            };
                        }

                        return project;
                    },
                )
                .filter(
                    ({ customer, duration, responsibilities, name, role, stack, teamSize }) => {
                        const isNullibleValues = customer === null
                            && duration === null
                            && responsibilities === null
                            && name === null
                            && role === null
                            && stack === null
                            && teamSize === null;

                        return !isNullibleValues;
                    },
                );

            const arrayResult = array.length === 0 ? null : array;

            return {
                ...experience,
                projects: arrayResult,
            };
        }
    }

    return experience;
});
export const resetExperienceFields = () => null;
