import styled from "styled-components";

export const Container = styled.div`
    color: var(--bege);

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 48px;

    width: 100%;

    padding: 32px 0;
`

export const ContainerTitle = styled.div`
    color: var(--bege);

    border-radius: 32px;

    padding: 16px;

    width: calc(100% - 32px);
    max-width: fit-content;
`

export const TeamList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    min-width: 325px;
    width: 35vw;
`