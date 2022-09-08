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
        position:        'Front-end',
        location:        'Ukraine',
        date:            '2022-2023',
        descriptionList: [
            {
                id:          uniqueId(),
                description: 'qwdwqdqw dwq dwq wq dqw dqwd qw dqw dqw dwq',
            },
        ],
        projects: [
            {
                id:               uniqueId(),
                name:             'qwdwqdwqd',
                customer:         'qwdqwd',
                duration:         'qwdqwd',
                role:             'qwdqwdqwd',
                responsibilities: 'ergre',
                teamSize:         'xz ',
                stack:            'zx xz zx zx xz xz xz',
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
