import { CalendarParagraph, CalendarTitle } from "../../styles/Text"
import { Container, ContainerText, ContainerTitle } from "./style"

export const CalendarDay = () => {
    return (
        <Container className="bg-bege">
            <ContainerTitle>
                <CalendarTitle>Segunda (01/04)</CalendarTitle>
            </ContainerTitle>

            <ContainerText>
                <CalendarParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra ut orci non.
                </CalendarParagraph>
                <CalendarParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra ut orci non.
                </CalendarParagraph>
            </ContainerText>
        </Container>
    )
}