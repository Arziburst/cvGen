// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { svgPdfIcon } from '../../../assets/images';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Main: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: Main
            <Link to = '/constructor'>
                <img src = { svgPdfIcon } />
                <span>Create CV</span>
            </Link>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
