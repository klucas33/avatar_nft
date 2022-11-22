import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

    body, html {
        font-family: PyeongChangPeace-Bold;
        box-sizing: border-box;
    }

    h1 {
        font-size: 30px;
    }

    li {
        font-size: 15px;
    }

    p {
        font-size: 15px;
    }
    
`;

export default GlobalStyle;
