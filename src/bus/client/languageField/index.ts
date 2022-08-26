// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = [
    {
        id:          uniqueId(),
        language:    'Ukrainian',
        placeholder: 'Language...',
    },
    {
        id:          uniqueId(),
        language:    'English',
        placeholder: 'Language...',
    },
    {
        id:          uniqueId(),
        language:    'Japanese N5',
        placeholder: 'Language...',
    },
];

// Types

type languagesItem = {
    id: string;
    language: string;
    placeholder: string;
}

export type languageFieldKeys = keyof typeof initialState;
type Options = { type: languageFieldKeys, value: string };
type OptionsLanguageField = { type: languageFieldKeys, value: languagesItem };


export type contactItem = {
    id: string;
    url: string;
    placeholder: string;
}

// Slice
export const languageFieldSlice = createSlice({
    name:     'languageField',
    initialState,
    reducers: {
        languageFieldCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        setLanguageField: (state, action: PayloadAction<OptionsLanguageField>) => ({
            ...state,
            languages: state.map((language) => {
                if (language.id === action.payload.value.id) {
                    return {
                        ...language,
                        language: action.payload.value.language,
                    };
                }

                return language;
            }),
        }),

        removeLanguageField: (state, action: PayloadAction<Options>) => ({
            ...state,
            languages: state.filter((language) => language.id !== action.payload.value),
        }),

        resetLanguageFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const languageFieldActions = languageFieldSlice.actions;
export default languageFieldSlice.reducer;

export const useLanguageFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        languageFieldRedux:     useSelector(({ languageField }) => languageField),
        setlanguageFieldAction: (options: Options) => {
            dispatch(languageFieldActions.languageFieldCreatorAction(options));
        },
        setlanguageField: (options: OptionsLanguageField) => {
            dispatch(languageFieldActions.setLanguageField(options));
        },
        resetlanguageFieldToInitial: () => void dispatch(languageFieldActions.resetLanguageFieldToInitialAction()),
    };
};

export const languageFieldCreatorAction = languageFieldActions.languageFieldCreatorAction;
