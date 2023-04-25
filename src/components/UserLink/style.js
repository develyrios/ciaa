import styled from "styled-components"

export const Link = styled.a`
    background: var(--bege);
    box-shadow: 3px 3px 0px var(--azul-claro);
    border-radius: 24px;

    color: var(--azul-escuro);
    text-decoration: none;

    padding: 8px;

    transition: 250ms;

    :hover {
        transform: scale(1.1);
        background-color: #FFDABF;
    }
    
    :active {
        transform: scale(0.75);
    }
`