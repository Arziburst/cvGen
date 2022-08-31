// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce, uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Bus
import { descriptionList, experienceItem } from '../types';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = [
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
    },
];

// Types
type experienceFieldKeys = keyof typeof initialState[0];
type Options = { type: experienceFieldKeys, value: experienceItem };
type OptionsSecond = { type: experienceFieldKeys, value: string };
type OptionsExperienceField = { type: experienceFieldKeys, value: descriptionList };

// Slice
export const experienceFieldSlice = createSlice({
    name:     'experienceField',
    initialState,
    reducers: {
        experienceFieldCreatorAction: (state, action: PayloadAction<Options>) => [
            ...state.map((experience) => {
                if (experience.id === action.payload.value.id) {
                    return {
                        ...experience,
                        [ action.payload.type ]: action.payload.value[ action.payload.type ],
                    };
                }

                return experience;
            }),
        ],
        removeExperienceField: (state, action: PayloadAction<OptionsSecond>) => [
            ...state.map((experience) => {
                return {
                    ...experience,
                    // eslint-disable-next-line max-len
                    descriptionList: experience.descriptionList.filter((descItem) => descItem.id !== action.payload.value),
                };
            }),
        ],
        addExperienceField: (state, action: PayloadAction<OptionsSecond>) => [
            ...state.map((experience) => {
                return {
                    ...experience,
                    descriptionList: [ ...experience.descriptionList, { id: action.payload.value, description: ''  }],
                };
            }),
        ],
        setExperienceDescrField: (state, action: PayloadAction<OptionsExperienceField>) => [
            ...state.map((experience) => {
                return {
                    ...experience,
                    descriptionList: experience.descriptionList.map((descr) => {
                        if (descr.id === action.payload.value.id) {
                            return {
                                ...descr,
                                description: action.payload.value.description,
                            };
                        }

                        return descr;
                    }),
                };
            }),
        ],
        resetExperienceFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const experienceFieldActions = experienceFieldSlice.actions;
export default experienceFieldSlice.reducer;

const useExperienceFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        experienceFieldRedux:     useSelector(({ experienceFields }) => experienceFields),
        setExperienceFieldAction: (options: Options) => {
            dispatch(experienceFieldActions.experienceFieldCreatorAction(options));
        },
        setExperienceDescrField: (options: OptionsExperienceField) => {
            dispatch(experienceFieldActions.setExperienceDescrField(options));
        },
        removeExperienceDescrField: (options: OptionsSecond) => {
            dispatch(experienceFieldActions.removeExperienceField(options));
        },
        addExperienceDescrField: (options: OptionsSecond) => {
            dispatch(experienceFieldActions.addExperienceField(options));
        },
        // eslint-disable-next-line max-len
        resetExperienceFieldToInitial: () => void dispatch(experienceFieldActions.resetExperienceFieldToInitialAction()),
    };
};

export const useExperienceHooksRedux = () => {
    const {
        experienceFieldRedux, setExperienceDescrField,
        setExperienceFieldAction, removeExperienceDescrField,
        addExperienceDescrField,
    } = useExperienceFieldRedux();

    const debounceChangeExperienceFieldAction = debounce((experience: experienceItem, type: Options['type']) => {
        setExperienceFieldAction({ type, value: experience });
    }, 300);

    const debounceChangeExperienceDescrField = debounce((description: descriptionList) => {
        setExperienceDescrField({ type: 'descriptionList', value: description });
    }, 300);

    const debounceRemoveExperienceDescrField = debounce((id: string) => {
        removeExperienceDescrField({ type: 'descriptionList', value: id });
    }, 100);

    const debounceAddExperienceDescrField = debounce(() => {
        addExperienceDescrField({ type: 'descriptionList', value: uniqueId() });
    }, 100);

    return {
        experienceFieldRedux,
        debounceChangeExperienceFieldAction,
        debounceChangeExperienceDescrField,
        debounceRemoveExperienceDescrField,
        debounceAddExperienceDescrField,
    };
};

export const experienceFieldCreatorAction = experienceFieldActions.experienceFieldCreatorAction;
