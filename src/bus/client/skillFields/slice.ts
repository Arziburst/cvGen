// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:    '',
        skill: 'HTML',
    },
    {
        id:    '',
        skill: 'CSS',
    },
    {
        id:    '',
        skill: 'JS',
    },
];

export const skillsSlice = createSlice<types.SkillsState, typeof reducers>({
    name: 'skills',
    initialState,
    reducers,
});

export const sliceName = skillsSlice.name;
export const skillsActions = skillsSlice.actions;
export default skillsSlice.reducer;
