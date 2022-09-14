// Types
import * as types from './types';

export const infoFieldsCreatorAction: types.BaseContact
    = (state, action) => {
        return {
            ...state,
            [ action.payload.type ]: action.payload.value,
        };
    };


export const resetInfoFields: types.BaseContact<types.InfoFieldsState> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state = { ...action.payload };

    return state;
};
