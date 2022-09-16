// Actions
import { infoFieldsActions, initialState } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks'; /* Typed selector */

export const useInfoFields = () => {
    const dispatch = useDispatch();
    const infoFields = useSelector(({ infoFields }) => infoFields);

    const handleChangeName = (text: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'name', value: text }));
    };

    const handleChangeImg = (img: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'avatar', value: img }));
    };

    const handleChangePosition = (position: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'position', value: position }));
    };

    const handleChangeOverview = (overview: string) => {
        dispatch(infoFieldsActions.infoFieldsCreatorAction({ type: 'overview', value: overview }));
    };

    const resetInfoFieldsToInithial = () => {
        dispatch(infoFieldsActions.resetInfoFields(initialState));
    };

    return {
        infoFields,
        handleChangeName,
        handleChangeImg,
        handleChangePosition,
        handleChangeOverview,
        resetInfoFieldsToInithial,
    };
};
