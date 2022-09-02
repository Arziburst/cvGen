// Types
import * as types from './types';

export const educationFieldCreatorAction: types.BaseContact<types.Education>
= (state, action) => state.map((education) => {
    return {
        ...education,
        [ action.type ]: action.payload,
    };
});

// Start here

