// Core
import React, { FC } from 'react';
import { GlobalStyles } from '../assets';
import { AppRoutes } from './routes';
import styled, { ThemeProvider } from 'styled-components';
import { useThemes } from '../bus/client/themes';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`;

export const App: FC = () => {
    const { themes } = useThemes();

    return (
        <ThemeProvider theme = { themes }>
            <GlobalStyles />
            <AppContainer>
                <AppRoutes />
            </AppContainer>
        </ThemeProvider>
    );
};
