/* eslint-disable no-nested-ternary */
// Types
import * as types from './types';

// eslint-disable-next-line max-len
export const educationFieldCreatorAction: types.BaseContact<types.EducationFieldValue> = (state, action) => state?.map(
    (education) => {
        if (education.id === action.payload.id) {
            return {
                ...education,
                [ action.payload.type ]: {
                    ...action.payload.data,
                },
            };
        }

        return education;
    },
);

export const changeDateField: types.BaseContact<types.EducationFieldDate> = (state, action) => state?.map(
    (education) => {
        if (education.id === action.payload.educationId) {
            return {
                ...education,
                [ action.payload.type ]: {
                    ...action.payload.data,
                },
            };
        }

        return education;
    },
);

export const removeEducationBlockField: types.BaseContact<string> = (state, action) => {
    if (state?.length === 1) {
        return null;
    }

    if (state !== null) {
        return [ ...state.filter((item) => item.id !== action.payload) ];
    }

    return state;
};

export const removeEducationFieldInBlock: types.BaseContact<types.OptionsRemoveFieldInBlock> = (state, action) => {
    if (state && state.length === 0) {
        return null;
    }

    if (state !== null) {
        const array = state
            .map(
                (education) => {
                    if (education.id === action.payload.id) {
                        return {
                            ...education,
                            [ action.payload.type ]: null,
                        };
                    }

                    return education;
                },
            )
            .filter(
                ({ degree, date, description }) => {
                    const isNullibleValues = degree === null && date === null && description === null;

                    return !isNullibleValues;
                },
            );

        return array.length === 0 ? null : array;
    }

    return state;
};

export const addEducation: types.BaseContact<Array<types.Education>>
= (state, action) => {
    if (state === null) {
        return action.payload;
    }

    return state;
};

export const addEducationBlock: types.BaseContact<types.OptionsSecond> = (state, action) => {
    if (state !== null) {
        return [
            ...state,
            { ...action.payload.data, id: action.payload.id },
        ];
    }

    return state;
};

export const resetEducationFields = () => null;
