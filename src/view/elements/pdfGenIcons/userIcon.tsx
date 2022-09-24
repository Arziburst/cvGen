// Core
import React from 'react';
import { Path, Svg } from '@react-pdf/renderer';

// Types
type propsType = {
    color: string
}
export const UserIcon = ({ color }: propsType) => {
    return (
        <Svg
            height = '68px'
            viewBox = '0 0 84 84'
            width = '68px'>
            <Path
                d = 'M 61.476562 19.476562 C 61.476562 30.234375 52.757812 38.957031 42 38.957031 C 31.242188 38.957031 22.523438 30.234375 22.523438 19.476562 C 22.523438 8.722656 31.242188 0 42 0 C 52.757812 0 61.476562 8.722656 61.476562 19.476562 Z M 61.476562 19.476562 '
                fill = { color }
            />
            <Path
                d = 'M 42 48.695312 C 22.5 48.695312 6.695312 64.5 6.695312 84 L 77.304688 84 C 77.304688 64.5 61.5 48.695312 42 48.695312 Z M 42 48.695312 '
                fill = { color }
            />
        </Svg>
    );
};
