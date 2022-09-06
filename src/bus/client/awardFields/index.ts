// Core
import { debounce } from 'lodash';

// Slice
import { awardFieldsActions, initialState } from './slice';

// Tools
import { useSelector, useDispatch } from '../../../tools/hooks';

// Types
import { AwardData } from './types';

// Constant
import { WAIT_TIME } from '../../../init';

export const useAwardFields = () => {
    const dispatch = useDispatch();
    const awardFields = useSelector(({ awardFields }) => awardFields);

    const debounceChangeAwardReceivedField = debounce((data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'received', value: data }));
    }, WAIT_TIME);

    const debounceChangeAwardDateField = debounce((data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'date', value: data }));
    }, WAIT_TIME);

    const debounceChangeAwardLocationField = debounce((data: AwardData) => {
        dispatch(awardFieldsActions.setAwardFields({ type: 'location', value: data }));
    }, WAIT_TIME);

    const debounceRemoveAwardField = debounce((id: string) => {
        dispatch(awardFieldsActions.removeAwardFields(id));
    }, WAIT_TIME);

    const debounceCreateAwardField = debounce(() => {
        dispatch(awardFieldsActions.addAwardFields(initialState[ 0 ]));
    }, WAIT_TIME);

    return {
        awardFields,
        debounceChangeAwardReceivedField,
        debounceChangeAwardDateField,
        debounceChangeAwardLocationField,
        debounceRemoveAwardField,
        debounceCreateAwardField,
    };
};
