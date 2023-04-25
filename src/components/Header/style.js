import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        h1 {
            font-size: 36px;
        }
        
        p {
            font-size: 16px;
        }

        h1 ~ p {
            font-size: 20px;
        }
    }
`