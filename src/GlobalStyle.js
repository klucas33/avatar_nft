import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face{
  font-family:'bitbit';
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff'),url('//cdn.df.nexon.com/img/common/font/DNFBitBit-Regular.woff2') ;
}

    body, html {
        font-family: bitbit;
        box-sizing: border-box;
        background-color: black;
    }

    h1 {
        font-size: 30px;
        font-weight:100;
    }

    li {
        font-size: 15px;
        font-weight:100;
    }

    p {
        font-size: 15px;
        font-weight:100;
        text-align: center;
        width: 100%;
    }
    
`;

export default GlobalStyle;
