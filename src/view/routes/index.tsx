// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Preview } from './Preview';
import { Constructor } from './Constructor';

// Bus
import { useTogglesRedux } from '../../bus/client/toggles';

export const Routes: FC = () => {
    const { togglesRedux: { isReadyPreview }} = useTogglesRedux();

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {
                isReadyPreview
                    ? <Preview />
                    : <Constructor />
            }
        </Suspense>
    );
};
