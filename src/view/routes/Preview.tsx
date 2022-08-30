// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Preview: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Preview /> }
                path = { book.PREVIEW }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.PREVIEW }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
