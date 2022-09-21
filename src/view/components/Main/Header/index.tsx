// Core
import React, { FC } from 'react';
import { useTogglesRedux } from '../../../../bus/client/toggles';

// Elements
import { Logo, NavLink } from '../../../elements';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Header: FC<PropTypes> = () => {
    const { setToggleAction, togglesRedux: { isOpenMenu }} = useTogglesRedux();

    return (
        <S.Container>
            <S.Inner>
                <Logo />
                <S.Navigation>
                    <S.MenuBtn
                        isOpen = { isOpenMenu }
                        onClick = { () => setToggleAction({ type: 'isOpenMenu', value: !isOpenMenu }) }>
                        <S.DecorLine />
                    </S.MenuBtn>
                    <S.List isOpen = { isOpenMenu }>
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
