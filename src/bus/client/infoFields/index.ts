// Actions
import { infoFieldsActions, initialState } from './slice';

// Tools
import { useSelector, useDispatch, useDebounce } from '../../../tools/hooks'; /* Typed selector */

export const useInfoFields = () => {
    const dispatch = useDispatch();
    const debounce = useDebounce();
    const infoFields = useSelector(({ infoFields }) => infoFields);

    const debounceChangeName = debounce((text: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'name', value: text }));
    });

    const debounceChangeImg = debounce((img: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'avatar', value: img }));
    });

    const debounceChangePosition = debounce((position: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'position', value: position }));
    });

    const debounceChangeOverview = debounce((overview: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'overview', value: overview }));
    });

    const resetInfoFieldsToInithial = () => {
        dispatch(infoFieldsActions.resetInfoFields(initialState));
    };

    return {
        infoFields,
        debounceChangeName,
        debounceChangeImg,
        debounceChangePosition,
        debounceChangeOverview,
        resetInfoFieldsToInithial,
    };
};
