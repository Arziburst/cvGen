// Core
import React, { FC } from 'react';

// Routes
import * as book from '../../../routes/book';

// Elements
import { Logo } from '../../../elements';

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
                <S.CreateResumeLink to = { book.CONSTRUCTOR }>
                    Create Resume
                </S.CreateResumeLink>
            </S.Inner>
        </S.Container>
    );
};
