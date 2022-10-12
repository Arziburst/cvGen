// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-datepicker/dist/react-datepicker.css';

// Init
import { persistor, store } from './init';

import { App } from './view';

const Root = () => (
    <Provider store = { store }>
        <PersistGate
            loading = { null }
            persistor = { persistor }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
