import styled from "styled-components"

export const Container = styled.div`
    color: var(--bege);

    display: flex;
    align-items: center;
    justify-content: center;

    height: 64px;
    width: 100%;

    padding: 0 8px;

    @media (max-width: 1100px) {
        h1 {
            font-size: 20px;
        }
    }
`