// Core
import React, { ChangeEvent, FC, useState } from 'react';
import { useTogglesRedux } from '../../../bus/client/toggles';

// Components
import { ErrorBoundary } from '../../components';

// Elements
// import { HelloBurst } from '../../elements';

// Styles
import { Container } from './styles';

const Root: FC = () => {
    const [ name, setname ] = useState('');
    const { setToggleAction } = useTogglesRedux();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setname(event.target.value);
    };

    console.log(name);


    return (
        <Container>
            <input
                type = 'text'
                onChange = { handleChange }
            />
            <button onClick = { () => {
                setToggleAction({ type: 'isReadyCV', value: true });
            } }>
                Gen cv
            </button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Root />
    </ErrorBoundary>
);
