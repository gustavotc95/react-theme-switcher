import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors};
    color: #000;
    font-family: 'Bebas Neue', cursive;
  }
`;