// Types
import * as types from './types';

export const setTheme: types.BaseContact<types.Theme> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    return {
        ...state,
        ...action.payload,
    };
};

