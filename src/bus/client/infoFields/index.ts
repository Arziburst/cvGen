// Core
import { debounce } from 'lodash';

// Actions
import { infoFieldsActions } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks'; /* Typed selector */

// Constant
import { WAIT_TIME } from '../../../init';

export const useInfoFields = () => {
    const dispatch = useDispatch();
    const infoFields = useSelector(({ infoFields }) => infoFields);

    const debounceChangeName = debounce((text: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'name', value: text }));
    }, WAIT_TIME);

    const debounceChangeImg = debounce((img: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'avatar', value: img }));
    }, WAIT_TIME);

    const debounceChangePosition = debounce((position: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'position', value: position }));
    }, WAIT_TIME);

    const debounceChangeOverview = debounce((overview: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'overview', value: overview }));
    }, WAIT_TIME);

    return {
        infoFields,
        debounceChangeName,
        debounceChangeImg,
        debounceChangePosition,
        debounceChangeOverview,
    };
};
