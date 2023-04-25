import { createGlobalStyle } from "styled-components"
import background from "../assets/bg-circles.svg"

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

    body {
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    #root {
        display: flex;
        flex-direction:column;
        align-items: center;
        row-gap: 64px;
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