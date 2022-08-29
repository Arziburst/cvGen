// Core
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { debounce } from 'lodash';

// Action
const fetchThunkAction = createAction('thunk/FETCH_THUNK_ASYNC');

export const fetchThunk = createAsyncThunk<string, string>(
    fetchThunkAction.type,
    (payload) => {
        const response = debounce((payload: string) => payload, 300, { leading: true });
        const result = response(payload);

        return result;
    },
);
