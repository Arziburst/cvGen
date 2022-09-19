// Core
import React, { FC } from 'react';

// Styles
import * as S from './styles';

// Assets
import { template } from '../../../../assets/images';
import { NavLink } from '../../../elements';

// Types
type PropTypes = {
    /* type props here */
}

export const Template: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Inner>
                <img
                    alt = 'template'
                    src = { template }
                />
                <NavLink text = 'Use Template'/>
            </S.Inner>
        </S.Container>
    );
};
