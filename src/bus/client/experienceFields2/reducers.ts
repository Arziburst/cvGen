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
        if (experience.id === action.payload.value.id) {
            experience.descriptionList.map(
                (description) => {
                    if (description.id === action.payload.value.id) {
                        return {
                            ...description,
                            [ action.payload.type ]: action.payload.value.text,
                        };
                    }

                    return description;
                },
            );
        }

        return experience;
    },
);

export const experienceFieldsProjectsCreatorAction: types.BaseContact<types.ExperienceProjectsOptions>
    = (state, action) => state.map(
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
