// Core
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import toggles from '../../bus/client/toggles';
import infoFields from '../../bus/client/infoFields/slice';
import contactFields from '../../bus/client/contactFields/slice';
import languageFields from '../../bus/client/languageFields/slice';
import experienceFields from '../../bus/client/experienceFields/slice';
import educationFields from '../../bus/client/educationFields/slice';
import awardFields from '../../bus/client/awardFields/slice';
import skillFields from '../../bus/client/skillFields/slice';
import themes from '../../bus/client/themes/slice';
import fields from '../../bus/client/fields/slice';
// Middleware
import {
    middleware,
} from './middleware';

// Constant
import { PERSIST_KEY } from '../constants';

const persistConfig = {
    key: PERSIST_KEY,
    storage,
};

const combinedReducers = combineReducers({
    skillFields,
    toggles,
    infoFields,
    contactFields,
    languageFields,
    experienceFields,
    educationFields,
    awardFields,
    themes,
    fields,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer:  persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
