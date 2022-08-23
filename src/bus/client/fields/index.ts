// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from '../../../tools/hooks';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    avatar:    '',
    firstName: '',
    lastName:  '',
    position:  '',
    overview:  '',
};

// Types
export type fieldsKeys = keyof typeof initialState;
type Options = { type: fieldsKeys, value: string};

// Slice
export const fieldsSlice = createSlice({
    name:     'fields',
    initialState,
    reducers: {
        fieldsCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        resetfieldsToInitialAction: () => initialState,
    },
});

// Interfaces
const fieldsActions = fieldsSlice.actions;
export default fieldsSlice.reducer;

export const useFieldsRedux = () => {
    const dispatch = useDispatch();

    return {
        fieldsRedux:          useSelector(({ fields }) => fields),
        setFieldsAction:      (options: Options) => void dispatch(fieldsActions.fieldsCreatorAction(options)),
        resetFieldsToInitial: () => void dispatch(fieldsActions.resetfieldsToInitialAction()),
    };
};

// Used ./src/tools/helpers/makeRequest
export const fieldsCreatorAction = fieldsActions.fieldsCreatorAction;
