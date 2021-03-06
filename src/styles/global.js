import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    line-height: 1.3;
    --webkit-text-size-adjust: 100%--webkit-text-size-adjust;
  }

  body, input, button {
    color: #1f1f1f;
    font-family: 'Mulish', sans-serif;
  }
`;
