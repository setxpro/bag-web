import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    /** 
    * Estilos gerais da aplicação
    */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-size: calc(60% + .8vmin); /** Faz com que o texto seja Responsivo */
        font-family: 'Montserrat', sans-serif;
    }

    /**
    *   Paleta de Cores
    */
    :root {
        --color-notify: #D61C4E;
        --color-border: #FFF;
        --color-logged: #3EC70B;
        --color-no-logged: #990000;
        --color-error-message: #f00;
        --color-border-login: #3B9AE1;
        --color-border-input: #3333;
        --color-btn: #3B9AE1;
    }

    
`;