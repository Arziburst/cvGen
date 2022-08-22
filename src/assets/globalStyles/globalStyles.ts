// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Assets
import notoSans400 from '../../assets/fonts/noto-sans-latin-400.woff2';
import notoSans500 from '../../assets/fonts/noto-sans-latin-500.woff2';
import notoSans800 from '../../assets/fonts/noto-sans-latin-800.woff2';

export const GlobalStyles = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: 'NotoSans400';
        font-weight: 400;
        src: url(${notoSans400});
    }

    @font-face {
        font-family: 'NotoSans500';
        font-weight: 500;
        src: url(${notoSans500});
    }

    @font-face {
        font-family: 'NotoSans800';
        font-weight: 800;
        src: url(${notoSans800});
    }

    * {
        box-sizing: border-box;
    }

    body,
    input,
    textarea {
        font-family: 'NotoSans400', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
`;
