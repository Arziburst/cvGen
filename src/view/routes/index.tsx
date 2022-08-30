// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Cv } from './CV';
import { Preview } from './Preview';

// Bus
import { useTogglesRedux } from '../../bus/client/toggles';

export const Routes: FC = () => {
    const { togglesRedux: { isReadyCV }} = useTogglesRedux();

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {
                isReadyCV
                    ? <Cv />
                    : <Preview />
            }
        </Suspense>
    );
};
