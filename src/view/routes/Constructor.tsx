// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Constructor: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Constructor /> }
                path = { book.CONSTRUCTOR }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.CONSTRUCTOR }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
