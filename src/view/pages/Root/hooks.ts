// Init
import { debounce } from 'lodash';

// Core
import { ChangeEvent } from 'react';

// Bus
import { useFieldsRedux } from '../../../bus/client/fields';

export const useCustomHooks = () => {
    const { setFieldsAction, fieldsRedux: { avatar, name, position, overview }} = useFieldsRedux();

    const debounceChangeText = debounce((text: string) => {
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

    const handleChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0);

        if (file) {
            debounceChangeImg(URL.createObjectURL(file));
        }
    };

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangeText(event.target.value);
    };

    const handleChangePosition = (event: ChangeEvent<HTMLInputElement>) => {
        debounceChangePosition(event.target.value);
    };

    const handleChangeOverview = (event: ChangeEvent<HTMLTextAreaElement>) => {
        debounceChangeOverview(event.target.value);
    };

    return {
        handleChangeImg,
        handleChangeName,
        handleChangePosition,
        handleChangeOverview,
        avatar,
        name,
        position,
        overview,
    };
};
