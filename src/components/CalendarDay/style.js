import styled from "styled-components"

export const Container = styled.div`
    border-width: 3px 2px;
    border-style: solid;
    border-color: var(--azul-escuro);
    border-radius: 8px;

    color: var(--azul-escuro);

    display: flex;
    flex-direction: column;

    min-width: 200px;
    width: calc(25% - 8px);

    @media (max-width: 900px) {
        min-width: 300px;
    }
`

export const ContainerTitle = styled.div`
    border-bottom: 3px solid var(--azul-escuro);
    border-radius: 8px;

    width: 100%;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 4px;

    padding: 4px;
`