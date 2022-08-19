// Core
import React, { FC }/* , { FC } */ from 'react';
import { defaultTheme, GlobalStyles } from '../assets';
import { Routes } from './routes';
import styled, { ThemeProvider } from 'styled-components';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

// Create Document Component
export const App: FC = () => (
    <ThemeProvider theme = { defaultTheme }>
        <GlobalStyles />
        <AppContainer>
            <Routes />
        </AppContainer>
    </ThemeProvider>
);
