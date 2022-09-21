// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Footer: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Inner>
                {/* <S.List>
                    <S.Item>
                        <S.Link href = '#'>
                            gmail
                        </S.Link>
                        <S.Link href = '#'>
                            github
                        </S.Link>
                        <S.Link href = '#'>
                            LinkedIn
                        </S.Link>
                    </S.Item>
                </S.List> */}
                <S.Copyright>
                    © 2022 ResumeCreator
                </S.Copyright>
            </S.Inner>
        </S.Container>
    );
};
