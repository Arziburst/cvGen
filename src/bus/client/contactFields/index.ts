// Tools
import { uniqueId } from 'lodash';
import { useDispatch, useSelector } from '../../../tools/hooks';

// Actions
import { contactFieldsActions } from './slice';

// Data
import { contactsInitialState } from './data';
// Types
import { ContactData, ContactsChangeType } from './types';

export const useContactField = () => {
    const dispatch = useDispatch();
    const contactFields = useSelector(({ contactFields }) => contactFields);

    const addContact = () => {
        dispatch(contactFieldsActions.addContact(contactsInitialState));
    };

    const handleChangeContactField = (contact: ContactData) => {
        dispatch(contactFieldsActions.contactFieldCreatorAction(contact));
    };

    const removeContactField = (type: ContactsChangeType) => {
        dispatch(contactFieldsActions.removeContactField(type));
    };

    const resetContactFieldsToInithialState = () => {
        dispatch(contactFieldsActions.resetContact());
    };

    const addContactFields = (type: ContactsChangeType) => {
        dispatch(contactFieldsActions.addContactField({
            data: {
                id:  uniqueId(),
                url: '',
            },
            type,
        }));
    };

    return {
        contactFields,
        handleChangeContactField,
        removeContactField,
        resetContactFieldsToInithialState,
        addContactFields,
        addContact,
    };
};

