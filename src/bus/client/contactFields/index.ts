// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Slice
import { initialState } from './slice';

// Actions
import { contactFieldsActions } from './slice';

// Types
import { Contact } from './types';

export const useContactField = () => {
    const dispatch = useDispatch();
    const contactFields = useSelector(({ contactFields }) => contactFields);

    const handleChangeContactField = (contact: Contact) => {
        dispatch(contactFieldsActions.contactFieldCreatorAction({ type: 'url', value: contact }));
    };

    const removeContactField = (id: string) => {
        dispatch(contactFieldsActions.removeContactField(id));
    };

    const resetContactFieldsToInithialState = () => {
        dispatch(contactFieldsActions.resetContactFields(initialState));
    };

    const addContactFields = () => {
        dispatch(contactFieldsActions.addContactField(initialState));
    };

    return {
        contactFields,
        handleChangeContactField,
        removeContactField,
        resetContactFieldsToInithialState,
        addContactFields,
    };
};

