// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import toggles from '../../bus/client/toggles';
import fields from '../../bus/client/fields';
import contactField from '../../bus/client/contactField';
import languageField from '../../bus/client/languageField';
import experienceField from '../../bus/client/experienceField';

// Middleware
import {
    middleware,
} from './middleware';

export const store = configureStore({
    reducer: {
        toggles,
        fields,
        contactField,
        languageField,
        experienceField,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
