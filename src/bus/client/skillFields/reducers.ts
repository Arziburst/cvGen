// Slice
import { initialState } from './slice';

// Types
import * as types from './types';

export const skillActionCreator: types.BaseContact = (state, action) => state.map(
    (skill) => {
        return {
            ...skill,
            skill: action.payload.data.skill,
        };
    },
);

export const addSkill: types.BaseContact<string> = (state, action) => [
    ...state,
    {
        ...initialState[ 0 ],
        id: action.payload,
    },
];

export const removeSkill: types.BaseContact<string> = (state, action) => state.filter(
    (skill) => skill.id !== action.payload,
);
