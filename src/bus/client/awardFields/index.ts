// Core
import { uniqueId } from 'lodash';

// Slice
import { awardFieldsActions, initialState } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';

// Types
import { AwardData } from './types';

export const useAwardFields = () => {
    const dispatch = useDispatch();
    const awardFields = useSelector(({ awardFields }) => awardFields);

    const handleChangeAwardReceivedField = (data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'received', value: data }));
    };

    const handleChangeAwardDateField = (data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'date', value: data }));
    };

    const handleChangeAwardLocationField = (data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'location', value: data }));
    };

    const removeAwardField = (id: string) => {
        dispatch(awardFieldsActions.removeAwardFields(id));
    };

    const createAwardField = () => {
        dispatch(awardFieldsActions.addAwardFields({ ...initialState[ 0 ], id: uniqueId() }));
    };

    const resetAwardFieldsToInithialState = () => {
        dispatch(awardFieldsActions.resetAwardFields(initialState));
    };

    return {
        awardFields,
        handleChangeAwardReceivedField,
        handleChangeAwardDateField,
        handleChangeAwardLocationField,
        removeAwardField,
        createAwardField,
        resetAwardFieldsToInithialState,
    };
};
