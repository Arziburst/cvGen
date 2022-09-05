// Types
import * as types from './types';

export const infoFieldsCreatorAction: types.BaseContact
    = (state, action) => {
        return {
            ...state,
            [ action.payload.type ]: action.payload.value,
        };
    };
