// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

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
            {
                id:          uniqueId(),
                description: '',
            },
            {
                id:          uniqueId(),
                description: '',
            },
        ],
    },
];

// Types
type descriptionList = {
    id: string;
    description: string;
}

type experienceItem = {
    id: string;
    position: string;
    location: string;
    date: string;
    descriptionList: Array<descriptionList>;
}

type experienceFieldKeys = keyof typeof initialState;
type Options = { type: experienceFieldKeys, value: string };
type OptionsExperienceField = { type: experienceFieldKeys, value: experienceItem };
type OptionsExperienceDescrField = { type: experienceFieldKeys, value: descriptionList };

// Slice
export const experienceFieldSlice = createSlice({
    name:     'experienceField',
    initialState,
    reducers: {
        experienceFieldCreatorAction: (state, action: PayloadAction<Options>) => ({
            ...state,
            [ action.payload.type ]: action.payload.value,
        }),
        setExperienceField: (state, action: PayloadAction<OptionsExperienceField>) => ({
            ...state,
            experience: state.map((experience) => {
                if (experience.id === action.payload.value.id) {
                    return {
                        ...experience,
                        ...action.payload.value,
                    };
                }

                return experience;
            }),
        }),
        setExperienceDescrField: (state, action: PayloadAction<OptionsExperienceDescrField>) => ({
            ...state,
            experience: state.map((experience) => {
                return {
                    ...experience,
                    descriptionList: [
                        ...experience.descriptionList.map((descr) => {
                            if (descr.id === action.payload.value.id) {
                                return {
                                    ...descr,
                                    description: action.payload.value.description,
                                };
                            }

                            return descr;
                        }),
                    ],
                };
            }),
        }),

        resetExperienceFieldToInitialAction: () => initialState,
    },
});

// Interfaces
const experienceFieldActions = experienceFieldSlice.actions;
export default experienceFieldSlice.reducer;

export const useExperienceFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        experienceFieldRedux:          useSelector(({ experienceField }) => experienceField),
        // eslint-disable-next-line max-len
        // setExperienceField:            (options: OptionsExperienceField) => void dispatch(experienceFieldCreatorAction.setExperienceField(options)),
        // // eslint-disable-next-line max-len
        // setExperienceDescrField:       (options: OptionsExperienceDescrField) => void dispatch(experienceFieldCreatorAction.setExperienceDescrField(options)),
        // eslint-disable-next-line max-len
        resetExperienceFieldToInitial: () => void dispatch(experienceFieldActions.resetExperienceFieldToInitialAction()),
    };
};

export const experienceFieldCreatorAction = experienceFieldActions.experienceFieldCreatorAction;
