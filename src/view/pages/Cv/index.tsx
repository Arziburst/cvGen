// Core
import { PDFViewer } from '@react-pdf/renderer';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { MyDocument } from '../../containers/Document';
// import
// // Styles
// import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

// import { My } from '@react-pdf/renderer';


const Cv: FC<PropTypes> = () => {
    return (
        <PDFViewer>
            <MyDocument
                name = 'qw'
                overview = 'qw'
                position = 'qw'
            />
        </PDFViewer>
    );
};

export default () => (
    <ErrorBoundary>
        <Cv />
    </ErrorBoundary>
);
