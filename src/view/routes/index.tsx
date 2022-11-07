// Core
import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import * as book from './book';

// Pages
import { Main, Preview, Constructor } from '../pages';

export const AppRoutes: FC = () => {
    return (
        <Suspense fallback = { <div>Spinner</div> }>
            <Routes>
                <Route
                    element = { <Main /> }
                    path = { book.MAIN }
                />
                <Route
                    element = { <Constructor /> }
                    path = { book.CONSTRUCTOR }
                />
                <Route
                    element = { <Preview /> }
                    path = { book.PREVIEW }
                />
            </Routes>
        </Suspense>
    );
};
