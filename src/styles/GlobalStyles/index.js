import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body #root {
        min-height: 100vh;

    }

    /* unvisited link */
    a:link {
    color:  #333;
    text-decoration: none;
    }

    /* visited link */
    a:visited {
    color:  #333;
    }

    /* mouse over link */
    a:hover {
    color: green;
    }

    /* selected link */
    a:active {
    color: #0000FF;
    }

`;
