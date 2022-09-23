// Core
import React, { FC } from 'react';
import { GlobalStyles, primaryTheme  } from '../assets';
import { AppRoutes } from './routes';
import styled, { ThemeProvider } from 'styled-components';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`;

export const App: FC = () => (
    <ThemeProvider theme = { primaryTheme }>
        <GlobalStyles />
        <AppContainer>
            <AppRoutes />
        </AppContainer>
    </ThemeProvider>
);
