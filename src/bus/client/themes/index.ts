// Slice
import { themesActions } from './slice';

// Tools
import { useDispatch, useSelector } from '../../../tools/hooks';

// Types
import { Theme } from './types';

export const useThemes = () => {
    const themes = useSelector((state) => state.themes);
    const dispatch = useDispatch();

    const handleChangeTheme = (theme: Theme) => {
        dispatch(themesActions.setTheme(theme));
    };

    return {
        themes,
        handleChangeTheme,
    };
};
