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

export const resetAwardFields: types.BaseContact<types.AwardFieldsState> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state = [ ...action.payload ];

    return action.payload;
};
