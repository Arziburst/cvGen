// Core
import { uniqueId } from 'lodash';

// Slice
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:              uniqueId(),
        position:        '',
        location:        '',
        date:            '',
        descriptionList: [
            {
                id:          uniqueId(),
                description: '',
            },
        ],
        projects: [
            {
                id:               uniqueId(),
                name:             '',
                customer:         '',
                duration:         '',
                role:             '',
                responsibilities: '',
                teamSize:         '',
                stack:            '',
            },
        ],
    },
];

export const experienceFieldsSlice = createSlice<types.ExperienceFieldsState, typeof reducers>({
    name: 'experienceFields',
    initialState,
    reducers,
});

export const sliceName = experienceFieldsSlice.name;
export const experienceFieldsActions = experienceFieldsSlice.actions;
export default experienceFieldsSlice.reducer;
