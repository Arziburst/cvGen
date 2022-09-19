// Core
import React, { FC } from 'react';

// Elements
import { Logo, NavLink } from '../../../elements';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Header: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Inner>
                <Logo />
                <S.Navigation>
                    <S.List>
                        <S.Item>
                            <S.AnchorLink href = '#'>
                                Templates
                            </S.AnchorLink>
                        </S.Item>
                        <S.Item>
                            <S.AnchorLink href = '#'>
                                About us
                            </S.AnchorLink>
                        </S.Item>
                        <S.Item>
                            <S.AnchorLink href = '#'>
                                Contact us
                            </S.AnchorLink>
                        </S.Item>
                    </S.List>
                </S.Navigation>
                <NavLink />
            </S.Inner>
        </S.Container>
    );
};
