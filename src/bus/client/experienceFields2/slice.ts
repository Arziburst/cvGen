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
                name:             'Ukrainian news site',
                customer:         'Ukraine',
                duration:         '7 (January 2020 - Jule 2020)',
                role:             'Front-end developer',
                responsibilities: 'Create responsive and adaptive SEO frendly website. It great project wherein i use new adaptive approaches and custom grid container Also use optimization modern format images, fonts, icons.',
                teamSize:         '5',
                stack:            'html, css3, sass, jquery, js, gulp, bem methodology',
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
