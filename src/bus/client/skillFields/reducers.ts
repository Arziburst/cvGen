// Types
import * as types from './types';

export const skillActionCreator: types.BaseContact = (state, action) => state.map(
    (skill) => {
        if (skill.id === action.payload.data.id) {
            return {
                ...skill,
                skill: action.payload.data.skill,
            };
        }

        return skill;
    },
);

export const addSkill: types.BaseContact<string> = (state, action) => [
    ...state,
    {
        skill: '',
        id:    action.payload,
    },
];

export const removeSkill: types.BaseContact<string> = (state, action) => state.filter(
    (skill) => skill.id !== action.payload,
);
