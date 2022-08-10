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
    *   Estilos da Scrollbar
    */
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.6);
    }

    /**
    *   Paleta de Cores
    */

    :root {
        --color-notify: '#D61C4E';
        --color-border-avatar: '#00D7FF';
        --color-logged: '#3EC70B';
        --color-no-logged: '#990000';
        
        /* --dark: '#2C3333';
        --side: '#395B64';
        --light: '#E7F6F2';
        side-Light: '#A5C9CA'; */
    }

    
`;