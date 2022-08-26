// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglesRedux } from '../../bus/client/toggles';

export const Routes: FC = () => {
    const { togglesRedux: { isReadyCV }} = useTogglesRedux();

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {
                isReadyCV
                    ? <Private /> // TODO Rename route
                    : <Public />
            }
        </Suspense>
    );
};
