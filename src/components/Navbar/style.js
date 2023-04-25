import styled from "styled-components"

export const Container = styled.div`
    color: var(--bege);

    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 12px;

    height: 64px;
    width: 100%;

    padding: 0 8px;

    img {
        width: 48px;
    }

    a {
        color: var(--bege);

        transition: 250ms;

        :hover {
        transform: scale(1.1);
    }
    
        :active {
            transform: scale(0.75);
        }
    }
`