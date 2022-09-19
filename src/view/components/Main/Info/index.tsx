// Core
import React, { FC } from 'react';

// Elements
import { NavLink } from '../../../elements';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Info: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Inner>
                <S.Title>
                    Create a professional CV
                </S.Title>
                <S.Description>
                    Fill in the blanks, choose a template and download your CV in minutes.
                </S.Description>
                <S.firstScreenLink>
                    <NavLink />
                </S.firstScreenLink>
            </S.Inner>
        </S.Container>
    );
};
