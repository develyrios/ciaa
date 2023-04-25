import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    padding: 32px 16px;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`

export const ContainerText = styled.div`
    color: var(--bege);
    
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    row-gap: 4px;

    min-width: 180px;
    width: 20%;

    @media (max-width: 1200px) {
        width: 100%;
    }
`

export const ContainerDays = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;

    width: 75%;

    @media (max-width: 1200px) {
        width: 100%;
    }
`