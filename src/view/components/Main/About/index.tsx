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

export const About: FC<PropTypes> = () => {
    return (
        <S.Container>
            <S.Inner>
                <S.AboutTitle>
                    About us
                </S.AboutTitle>
                <S.Descr>
                    It all started in idea, when we launched a small web app that built online documents.
                    We believe that building a job-worthy resume should be a fast and simple process.
                    In fact, we’ve always been about building systems that are quick and easy-to-use,
                    yet consistently get good results.
                </S.Descr>
            </S.Inner>
        </S.Container>
    );
};
