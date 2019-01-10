import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Montserrat, sans-serif;
    font-size: ${({ theme }) => theme.size[13]}rem;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
    left: 0;
    overflow: hidden;
    padding: ${({ theme }) =>
      `${theme.size[55]}rem ${theme.size[21]}rem ${theme.size[21]}rem`};
    position: absolute;
    top: 0;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    padding: 2.1rem 0;
    text-align: center;
  }
`;

export default GlobalStyle;
