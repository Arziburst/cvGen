/* eslint-disable no-nested-ternary */
// Types
import * as types from './types';

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

export const removeEducationBlockField: types.BaseContact<string> = (state, action) => {
    if (state?.length === 1) {
        return null;
    }

    if (state !== null) {
        return [ ...state.filter((item) => item.id !== action.payload) ];
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
