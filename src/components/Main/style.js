import styled from "styled-components"
import wave from "../../assets/wave_main.svg"

export const Container = styled.main`
    background-image: url(${wave});
    background-position: top -16px left;
    background-repeat: no-repeat;
    background-size: 100%;

    display: flex;
    flex-direction:column;
    align-items: center;
    row-gap: 64px;

    width: 100%;

    padding-top: 64px;

    @media (min-width: 1440px) {
        background-position: top -48px left;
    }

    @media (max-width: 900px) {
        background-position: top left;
    }

`