// Types
import * as types from './types';

export const setAwardFields: types.BaseContact = (state, action) => state.map(
    (award) => {
        if (award.id === action.payload.value.id) {
            return {
                ...award,
                [ action.payload.type ]: action.payload.value.text,
            };
        }

        return award;
    },
);

export const removeAwardFields: types.BaseContact<string> = (state, action) => state.filter(
    (award) => award.id !== action.payload,
);

export const addAwardFields: types.BaseContact<types.Award> = (state, action) => [
    ...state,
    action.payload,
];
