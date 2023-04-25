import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
    --azul-claro: #709FFF;
    --azul-escuro: #426597;
    --bege: #FFF5EE;
    }

    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
        }

    button {
    cursor: pointer;
    }

    #root {
        display: flex;
        flex-direction:column;
        align-items: center;
    }

    .bg-azul-claro {
        background-color: var(--azul-claro);
    }

    .bg-azul-escuro {
        background-color: var(--azul-escuro);
    }

    .bg-bege {
        background-color: var(--bege);
    }
`