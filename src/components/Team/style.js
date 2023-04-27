import styled from "styled-components";
import waveTop from "../../assets/wave_team_top.svg"
import waveBottom from "../../assets/wave_team_bottom.svg"
import bgTitle from "../../assets/bg_team_title.svg"

export const Container = styled.div`
    background-image: url(${waveTop}), url(${waveBottom});
    background-position: top 64px left, bottom 16px left;
    background-repeat: no-repeat;
    background-size: 100%, 100%;
    color: var(--bege);

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    padding: 32px 0 64px 0;

    
    @media (max-width: 1200px) {
        background-position: top 64px left, bottom 32px left;
    }

    @media (max-width: 900px) {
        background-position: top 128px left, bottom 48px left;
    }

    @media (max-width: 450px) {
        background-position: top 64px left, bottom 52px left;
    }
`

export const ContainerTitle = styled.div`
    background-image: url(${bgTitle});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: var(--bege);

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    height: 160px;
    width: 480px;
    max-width: calc(100% - 32px);
    
    @media (max-width: 450px) {
        height: 80px;

        h1 {
            font-size: 20px;
        }
    }
`

export const TeamListBackgroungContainer = styled.div`
    display: flex;
    justify-content: center;
    
    width: 100%;
`

export const TeamList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    min-width: 325px;
    width: 45vw;

    padding: 32px 0;
`