// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce, uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Bus
import { languagesItem } from '../types';

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
type languageFieldKeys = 'languagesFields';
type Options = { type: languageFieldKeys, value: string };
type OptionsLanguageField = { type: languageFieldKeys, value: languagesItem };

// Slice
export const languageFieldSlice = createSlice({
    name:     'languageField',
    initialState,
    reducers: {
        languageFieldCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),

        setLanguageField: (state, action: PayloadAction<OptionsLanguageField>) => [
            ...state.map((language) => {
                if (language.id === action.payload.value.id) {
                    return {
                        ...language,
                        language: action.payload.value.language,
                    };
                }

                return language;
            }),
        ],

        // eslint-disable-next-line max-len
        removeLanguageField: (state, action: PayloadAction<Options>) => [ ...state.filter((language) => language.id !== action.payload.value) ],

        createLanguageField: (state, action: PayloadAction<Options>) => [
            ...state,
            { id: action.payload.value, language: '', placeholder: 'Language...' },
        ],

        resetLanguageFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const languageFieldActions = languageFieldSlice.actions;
export default languageFieldSlice.reducer;

const useLanguageFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        languageFieldRedux:     useSelector(({ languageFields }) => languageFields),
        setLanguageFieldAction: (options: Options) => {
            dispatch(languageFieldActions.languageFieldCreatorAction(options));
        },
        setLanguageField: (options: OptionsLanguageField) => {
            dispatch(languageFieldActions.setLanguageField(options));
        },
        removeLanguageField: (options: Options) => {
            dispatch(languageFieldActions.removeLanguageField(options));
        },
        createLanguageField: (options: Options) => {
            dispatch(languageFieldActions.createLanguageField(options));
        },
        resetlanguageFieldToInitial: () => void dispatch(languageFieldActions.resetLanguageFieldToInitialAction()),
    };
};

export const useLanguageHooksRedux = () => {
    const {
        languageFieldRedux, setLanguageField,
        removeLanguageField, createLanguageField,
    } = useLanguageFieldRedux();

    const debounceChangeLanguageField = debounce((item: languagesItem) => {
        setLanguageField({ type: 'languagesFields', value: item });
    }, 300);

    const debounceRemoveLanguageField = debounce((id: string) => {
        removeLanguageField({ type: 'languagesFields', value: id });
    }, 100);

    const debounceCreateLanguageField = debounce((id: string) => {
        createLanguageField({ type: 'languagesFields', value: id });
    }, 100);

    return {
        languageFieldRedux,
        debounceChangeLanguageField,
        debounceRemoveLanguageField,
        debounceCreateLanguageField,
    };
};

export const languageFieldCreatorAction = languageFieldActions.languageFieldCreatorAction;
