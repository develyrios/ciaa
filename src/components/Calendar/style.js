import styled from "styled-components"
import wave from "../../assets/wave_calendar.svg"

export const BackgroundContainer = styled.div`
    background-image: url(${wave});
    background-position: top -16px left;
    background-repeat: no-repeat;
    background-size: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    @media (min-width: 1440px) {
        background-position: top -24px left;
    }

    @media (max-width: 900px) {
        background-position: top left;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;

    max-width: 1440px;

    padding: 32px 16px 0 16px;

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