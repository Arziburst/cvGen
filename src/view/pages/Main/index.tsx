// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Info, Header, Template, Footer } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Main: FC<PropTypes> = () => {
    return (
        <S.Container>
            <Header />
            <Info />
            <Template />
            <Footer />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
