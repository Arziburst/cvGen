// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { debounce } from 'lodash';
import { useDispatch } from '../../../tools/hooks';

// Tools
import { useSelector } from '../../../tools/hooks';

const initialState = {
    avatar:   '',
    name:     'Dmitry Ponomarenko',
    position: 'Front-end React developer',
    overview: 'I started out as a creating responsive website and soon started taking on ReactJS, Redux and Typescript. I have a strong background in create responsive layout and user ui. I am proficient in JavaScript, CSS, HTML. I am also skilled at using Git. I’m always working towards updating my skills and keeping up with the industry.This is why I’ve recently started taking Next.js. So, I love the experience.',
};

// Types
type fieldsKeys = keyof typeof initialState;
type Options = { type: fieldsKeys, value: string };

// Slice
export const fieldsSlice = createSlice({
    name:     'infoFields',
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

const useInfoFieldRedux = () => {
    const dispatch = useDispatch();

    return {
        infoFieldsRedux: useSelector(({ infoFields }) => infoFields),
        setFieldsAction: (options: Options) => {
            dispatch(fieldsActions.fieldsCreatorAction(options));
        },
        resetFieldsToInitial: () =>  void dispatch(fieldsActions.resetfieldsToInitialAction()),
    };
};

export const useInfoFieldHooksRedux = () => {
    const { infoFieldsRedux, setFieldsAction } = useInfoFieldRedux();

    const debounceChangeName = debounce((text: string) => {
        setFieldsAction({ type: 'name', value: text });
    }, 300);

    const debounceChangeImg = debounce((img: string) => {
        setFieldsAction({ type: 'avatar', value: img });
    }, 300);

    const debounceChangePosition = debounce((position: string) => {
        setFieldsAction({ type: 'position', value: position });
    }, 300);

    const debounceChangeOverview = debounce((overview: string) => {
        setFieldsAction({ type: 'overview', value: overview });
    }, 300);


    return {
        infoFieldsRedux,
        debounceChangeName,
        debounceChangeImg,
        debounceChangePosition,
        debounceChangeOverview,
    };
};

// Used ./src/tools/helpers/makeRequest
export const fieldsCreatorAction = fieldsActions.fieldsCreatorAction;

