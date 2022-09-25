// Types
import * as types from './types';

export const setTheme: types.BaseContact<types.Theme> = (state, action) => {
    // eslint-disable-next-line no-param-reassign
    return {
        ...state,
        ...action.payload,
        current: !state.current,
    };
};

export const toggleTheme: types.BaseContact<boolean> = (state, action) => {
    return {
        ...state,
        current: action.payload,
    };
};

