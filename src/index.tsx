// Core
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

// View
import { MyDocument } from './view';


import styled from 'styled-components';
import { GlobalStyles } from './assets';
import { Testinputs } from './view/components/Testinputs';

// Style
const AppContainer = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`;

const App = () => {
    const [ name, setName ] = useState('');

    const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setTimeout(() => {
            setName(event.target.value);
        }, 500);
    };

    return (
        <AppContainer>
            <GlobalStyles />
            <Testinputs setName = { (event) => handleSetName(event) }/>
            <PDFViewer
                height = '100%'
                showToolbar = { false }
                width = '50%'>
                <MyDocument name = { name }/>
            </PDFViewer>
        </AppContainer>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
