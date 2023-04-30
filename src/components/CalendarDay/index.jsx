import { CalendarParagraph, CalendarTitle } from "../../styles/Text"
import { Container, ContainerText, ContainerTitle } from "./style"

export const CalendarDay = ({ title, text }) => {
    return (
        <Container className="bg-bege">
            <ContainerTitle>
                <CalendarTitle>{title}</CalendarTitle>
            </ContainerTitle>

            <ContainerText>
                <CalendarParagraph>{text}</CalendarParagraph>
            </ContainerText>
        </Container>
    )
}