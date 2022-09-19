// Core
import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import * as book from './book';

// Pages
import { Main, Constructor, Preview } from '../pages';
import { useTogglesRedux } from '../../bus/client/toggles';

export const AppRoutes: FC = () => {
    const { togglesRedux: { isPreview }} = useTogglesRedux();

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            <Routes>
                <Route
                    element = { <Main /> }
                    path = { book.MAIN }
                />
                <Route
                    element = {
                        isPreview
                            ? <Preview />
                            : <Constructor />
                    }
                    path = { book.CONSTRUCTOR }
                />
            </Routes>
        </Suspense>
    );
};
