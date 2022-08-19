// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Cv /> }
                path = { book.CV }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.CV }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
