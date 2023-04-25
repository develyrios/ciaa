import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 1000px;

    padding: 64px 0;

    @media (max-width: 1100px) {
        flex-direction: column;
        width: 85%;
    }
`

export const ContainerTitle = styled.div`
    color: var(--bege);

    border-radius: 128px;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 240px;
    width: 20%;

    @media (max-width: 1100px) {
        background: none;
        color: var(--azul-claro);

        height: fit-content;
        width: 100%;
    }
`

export const ContainerText = styled.div`
    color: var(--bege);

    border-radius: 256px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;

    padding: 64px;

    @media (max-width: 1100px) {
        background: none;
        color: var(--azul-escuro);

        height: fit-content;
        width: 100%;

        padding: 16px 0 0;
    }
`