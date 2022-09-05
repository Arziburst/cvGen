// Types
import * as types from './types';

export const educationFieldCreatorAction: types.BaseContact = (state, action) => state.map(
    (education) => {
        if (education.id === action.payload.value.id) {
            return {
                ...education,
                [ action.payload.type ]: action.payload.value.text,
            };
        }

        return education;
    },
);

export const removeEducationField: types.BaseContact<string> = (state, action) => state.filter(
    (education) => education.id !== action.payload,
);

export const addEducationField: types.BaseContact<string>
= (state, action) => [
    ...state,
    {
        id:          action.payload,
        date:        '',
        degree:      '',
        description: '',
    },
];
