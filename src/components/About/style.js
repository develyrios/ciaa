import styled from "styled-components"
import bgTitle from "../../assets/bg_about_title.svg"
import bgText from "../../assets/bg_about_text.svg"

export const Container = styled.div`
    display: flex;
    justify-content: center;

    width: 1000px;

    padding-top: 128px;
    margin-left: 192px;

    position: relative;

    @media (max-width: 1100px) {
        flex-direction: column;
        width: 85%;

        padding-top: 32px;
        margin-left: 0;
    }
`

export const ContainerTitle = styled.div`
    background-image: url(${bgTitle});
    background-repeat: no-repeat;
    background-size: contain;
    color: var(--bege);

    display: flex;
    align-items: center;
    justify-content: center;

    height: 240px;
    width: 20%;

    position: absolute;
    left: -32px;

    @media (max-width: 1100px) {
        background-image: none;
        color: var(--azul-claro);

        height: fit-content;
        width: 100%;

        position: static;
    }
`

export const ContainerText = styled.div`
    background-image: url(${bgText});
    background-repeat: no-repeat;
    background-size: contain;
    color: var(--bege);

    color: var(--bege);

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 320px;
    width: 80%;

    padding: 64px 128px 64px 80px;

    @media (max-width: 1100px) {
        background-image: none;
        color: var(--azul-escuro);

        height: fit-content;
        width: 100%;

        min-height: fit-content;
        padding: 16px 0 0;
    }
`